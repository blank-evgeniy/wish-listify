import { createRoot } from "react-dom/client";

import { QueryClientProvider } from "@tanstack/react-query";
import { HashRouter } from "react-router";

import { queryClient } from "@/shared/api/query-client.ts";
import { UserProvider } from "@/app/providers/user";
import App from "@/app/App.tsx";

import "@/app/styles/index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </UserProvider>
    </QueryClientProvider>
  </HashRouter>
);
