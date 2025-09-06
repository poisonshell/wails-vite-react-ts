import {
  WindowMinimise,
  WindowToggleMaximise,
  Quit,
  WindowIsMaximised,
  WindowIsMinimised,
} from "../../wailsjs/runtime/runtime";
import { useState, useEffect } from "react";

const TitleBar = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const checkWindowState = async () => {
      try {
        const [maximized, minimized] = await Promise.all([
          WindowIsMaximised().catch(() => false),
          WindowIsMinimised().catch(() => false),
        ]);

        setIsMaximized(maximized);
        setIsMinimized(minimized);
      } catch (error) {
        console.log("Window state check not available:", error);
      }
    };

    checkWindowState();

    const interval = setInterval(checkWindowState, 1000);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key === "F4") {
        event.preventDefault();
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMinimize = async () => {
    try {
      WindowMinimise();

      setIsMinimized(true);
    } catch (error) {
      console.error("Failed to minimize window:", error);
    }
  };

  const handleMaximize = async () => {
    try {
      WindowToggleMaximise();

      const maximized = await WindowIsMaximised().catch(() => false);

      setIsMaximized(maximized);
    } catch (error) {
      console.error("Failed to toggle maximize window:", error);
    }
  };

  const handleClose = async () => {
    try {
      Quit();
    } catch (error) {
      console.error("Failed to close window:", error);
    }
  };

  const handleDoubleClick = () => {
    handleMaximize();
  };

  return (
    <div
      className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-10 select-none"
      style={{ "--wails-draggable": "drag" } as React.CSSProperties}
    >
      <div
        className="flex items-center px-4 h-full"
        style={{ "--wails-draggable": "no-drag" } as React.CSSProperties}
        onDoubleClick={handleDoubleClick}
      >
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">W</span>
          </div>
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300 pointer-events-none">
            wails-vite-react-ts
          </div>
        </div>
      </div>

      <div
        className="flex-1 h-full cursor-move"
        onDoubleClick={handleDoubleClick}
      />

      <div
        className="flex"
        style={{ "--wails-draggable": "no-drag" } as React.CSSProperties}
      >
        <button
          onClick={handleMinimize}
          className={`w-12 h-10 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-150 ${
            isMinimized ? "bg-gray-200 dark:bg-gray-700" : ""
          }`}
          title="Minimize"
          style={{ "--wails-draggable": "no-drag" } as React.CSSProperties}
          disabled={isMinimized}
          aria-label="Minimize window"
        >
          <svg
            className="w-4 h-4 text-gray-600 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          onClick={handleMaximize}
          className="w-12 h-10 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-150"
          title={isMaximized ? "Restore Down" : "Maximize"}
          style={{ "--wails-draggable": "no-drag" } as React.CSSProperties}
          aria-label={isMaximized ? "Restore window" : "Maximize window"}
        >
          {isMaximized ? (
            <svg
              className="w-4 h-4 text-gray-600 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h6v6H5V5z"
                clipRule="evenodd"
              />
              <path d="M7 9h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1H8V9z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-gray-600 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 1v10h10V5H5z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        <button
          onClick={handleClose}
          className="w-12 h-10 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-150 group"
          title="Close"
          style={{ "--wails-draggable": "no-drag" } as React.CSSProperties}
          aria-label="Close window"
        >
          <svg
            className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
