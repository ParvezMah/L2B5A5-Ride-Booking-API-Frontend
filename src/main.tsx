import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/index.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { Toaster } from "./components/ui/sonner.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
  </React.StrictMode>
);
