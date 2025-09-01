#!/bin/bash

# Build script specifically for Windows
set -e

echo "🪟 Building Wails application for Windows..."


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


echo "🔨 Building for Windows (amd64)..."
wails build -platform windows/amd64

echo "✅ Windows build completed successfully!"
echo "📁 Binary available in: build/bin/"
echo "💡 You can also run './scripts/build-all.sh' to build for all platforms"
