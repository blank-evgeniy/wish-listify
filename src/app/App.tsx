import { Header } from "@/widgets/header";
import { AppRouter } from "./providers/router/";

function App() {
  return (
    <div className="min-h-screen bg-bg-100 text-text-100">
      <Header />
      <div className="pt-[var(--header)]">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
