import { Header } from "@/widgets/header";
import { AppRouter } from "./providers/router/";
import MobileNavigation from "@/widgets/mobile-navigation/ui/mobile-navigation";

function App() {
  return (
    <div className="min-h-screen bg-bg-100 text-text-100">
      <Header />
      <div className="pt-header pb-mobile-nav-h md:pb-0">
        <AppRouter />
      </div>
      <MobileNavigation />
    </div>
  );
}

export default App;
