import { Layout } from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Favorites } from "./pages/favorite/Favorites";
import { NotFound } from "./pages/NotFound/NotFound";
import { Details } from "./pages/details/Details";
import useLocalStorage from "use-local-storage";
import { Category } from "./pages/category/Category";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  return (
    <div className="app" container data-theme={theme}>
      <Layout setTheme={setTheme} theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/category" element={<Category />} />
          <Route path="/games/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
