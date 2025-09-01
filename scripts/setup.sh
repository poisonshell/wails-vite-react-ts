#!/bin/bash

# Setup script for new project
set -e

echo "🚀 Setting up Wails project..."

# Check if we're in the right directory
if [ ! -f "wails.json" ] && [ ! -f "wails.tmpl.json" ]; then
    echo "❌ Error: Not in a Wails project directory"
    echo "Please run this script from the root of your Wails project"
    exit 1
fi

# Check system dependencies
echo "🔍 Checking system dependencies..."

# Check Go
if ! command -v go &> /dev/null; then
    echo "❌ Go is not installed"
    echo "Please install Go from: https://golang.org/dl/"
    exit 1
else
    echo "✅ Go $(go version | awk '{print $3}') found"
fi

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    echo "Please install Node.js from: https://nodejs.org/"
    exit 1
else
    echo "✅ Node.js $(node --version) found"
fi

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    echo "Please install npm (usually comes with Node.js)"
    exit 1
else
    echo "✅ npm $(npm --version) found"
fi

# Check Wails CLI
if ! command -v wails &> /dev/null; then
    echo "⚠️  Wails CLI not found. Installing..."
    go install github.com/wailsapp/wails/v2/cmd/wails@latest
    
    # Check if installation was successful
    if ! command -v wails &> /dev/null; then
        echo "❌ Failed to install Wails CLI"
        echo "Please make sure \$GOPATH/bin is in your PATH"
        exit 1
    else
        echo "✅ Wails CLI installed successfully"
    fi
else
    echo "✅ Wails CLI $(wails version | head -n1) found"
fi

# Initialize Go module if go.mod doesn't exist
if [ ! -f "go.mod" ]; then
    echo "📦 Initializing Go module..."
    PROJECT_NAME=$(basename "$(pwd)")
    go mod init "$PROJECT_NAME"
fi

# Install Go dependencies
echo "📦 Installing Go dependencies..."
go mod tidy

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Generate Wails bindings
echo "🔗 Generating Wails bindings..."
wails generate

echo ""
echo "✅ Setup completed successfully!"
echo ""
echo "🎯 Next steps:"
echo "   1. Run './scripts/dev.sh' to start development"
echo "   2. Run './scripts/build.sh' to build for current platform"
echo "   3. Run './scripts/build-all.sh' to build for all platforms"
echo ""
echo "📖 For more information, see README.md"
