#!/bin/bash

# Build script specifically for macOS
set -e

echo "🍎 Building Wails application for macOS..."


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


ARCH=$(uname -m)
echo "🔍 Detected architecture: $ARCH"

if [ "$ARCH" = "arm64" ]; then
    echo "🔨 Building for macOS (Apple Silicon - arm64)..."
    wails build -platform darwin/arm64
else
    echo "🔨 Building for macOS (Intel - amd64)..."
    wails build -platform darwin/amd64
fi

echo "✅ macOS build completed successfully!"
echo "📁 Binary available in: build/bin/"
echo "💡 You can also run './scripts/build-all.sh' to build for all platforms"
