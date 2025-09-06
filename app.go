package main

import (
	"context"
	"fmt"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// GetHelloWorld returns a simple hello world message
func (a *App) GetHelloWorld() string {
	return "HELLO WORLD"
}

// version is set at build time via -ldflags; falls back to wails.json info.productVersion
var version = ""

func (a *App) GetAppVersion() string {
	if version != "" {
		return version
	}
	// Fallback when ldflags not provided
	return "1.1.0"
}

func (a *App) GetPlatform() string {
	return "desktop"
}

// Window Control Methods

// WindowResize resizes the window to the specified dimensions
func (a *App) WindowResize(width, height int) {
	runtime.WindowSetSize(a.ctx, width, height)
}

// WindowMinimize minimizes the window
func (a *App) WindowMinimize() {
	runtime.WindowMinimise(a.ctx)
}

// WindowMaximize maximizes the window
func (a *App) WindowMaximize() {
	runtime.WindowMaximise(a.ctx)
}

// WindowUnmaximize unmaximizes the window
func (a *App) WindowUnmaximize() {
	runtime.WindowUnmaximise(a.ctx)
}

// WindowFullscreen toggles fullscreen mode
func (a *App) WindowFullscreen() {
	runtime.WindowFullscreen(a.ctx)
}

// WindowShow shows the window if hidden
func (a *App) WindowShow() {
	runtime.WindowShow(a.ctx)
}

// WindowHide hides the window
func (a *App) WindowHide() {
	runtime.WindowHide(a.ctx)
}

// WindowCenter centers the window on screen
func (a *App) WindowCenter() {
	runtime.WindowCenter(a.ctx)
}

// WindowSetTitle sets the window title
func (a *App) WindowSetTitle(title string) {
	runtime.WindowSetTitle(a.ctx, title)
}

// WindowIsMaximised returns true if window is maximized
func (a *App) WindowIsMaximised() bool {
	return runtime.WindowIsMaximised(a.ctx)
}

// WindowIsMinimised returns true if window is minimized
func (a *App) WindowIsMinimised() bool {
	return runtime.WindowIsMinimised(a.ctx)
}

// WindowIsFullscreen returns true if window is in fullscreen
func (a *App) WindowIsFullscreen() bool {
	return runtime.WindowIsFullscreen(a.ctx)
}
