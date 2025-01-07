import { createRoot } from "react-dom/client";

import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { HashRouter } from "react-router";

import { queryClient } from "@/shared/api/query-client.ts";
import App from "@/app/App.tsx";

import "@/app/styles/index.css";
import { UserProvider } from "./app/providers/user";

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
