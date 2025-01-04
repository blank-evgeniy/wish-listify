import { Header } from "@/widgets/header";
import { AppRouter } from "./providers/router/";

function App() {
  return (
    <div className="min-h-screen bg-rose-950 text-rose-50">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
