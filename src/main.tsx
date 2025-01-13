import { createRoot } from "react-dom/client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HashRouter } from "react-router";

import { queryClient } from "@/shared/api/query-client.ts";
import { UserProvider } from "@/app/providers/user";
import { ThemeProvider } from "./app/providers/theme";
import App from "@/app/App.tsx";

import "@/app/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UserProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </UserProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HashRouter>
);
