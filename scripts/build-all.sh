#!/bin/bash

# Build script for all platforms
set -e

echo "🚀 Building Wails application for all platforms..."


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


mkdir -p build

echo "🔨 Building for all platforms..."


echo "🪟 Building for Windows (amd64)..."
wails build -platform windows/amd64 -o build/windows-amd64


echo "🍎 Building for macOS (amd64)..."
wails build -platform darwin/amd64 -o build/darwin-amd64


echo "🍎 Building for macOS (arm64)..."
wails build -platform darwin/arm64 -o build/darwin-arm64


echo "🐧 Building for Linux (amd64)..."
wails build -platform linux/amd64 -o build/linux-amd64

echo "✅ All builds completed successfully!"
echo "📁 Binaries available in:"
echo "   - build/windows-amd64/"
echo "   - build/darwin-amd64/"
echo "   - build/darwin-arm64/"
echo "   - build/linux-amd64/"