import { createRoot } from "react-dom/client";

import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router";

import { queryClient } from "@/shared/api/query-client.ts";
import App from "@/app/App.tsx";

import "@/app/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </BrowserRouter>
);
