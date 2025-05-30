import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PostListPage from "./pages/PostListPage";
import DefaultLayout from "./layouts/DefaultLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/posts" element={<PostListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
