#!/bin/bash

# Build script specifically for Linux
set -e

echo "🐧 Building Wails application for Linux..."


if [ ! -f "wails.json" ] && [ ! -f "wails.tmpl.json" ]; then
    echo "❌ Error: Not in a Wails project directory"
    echo "Please run this script from the root of your Wails project"
    exit 1
fi


if ! command -v wails &> /dev/null; then
    echo "❌ Wails CLI is not installed"
    echo "Please install it with: go install github.com/wailsapp/wails/v2/cmd/wails@latest"
    exit 1
fi


if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd frontend
    npm install
    cd ..
fi


echo "🔨 Building for Linux (amd64)..."
wails build -platform linux/amd64

echo "✅ Linux build completed successfully!"
echo "📁 Binary available in: build/bin/"
echo "💡 You can also run './scripts/build-all.sh' to build for all platforms"
