import { Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import { LoggedInComponent } from "./components/layout/LoggedInComponent";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="popular" element={<Popular />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="games/:id" element={
        <LoggedInComponent><Details /></LoggedInComponent>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
