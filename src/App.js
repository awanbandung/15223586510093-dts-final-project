import { Routes, Route, useNavigate } from "react-router-dom";
// pages & components
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import { LoggedInComponent } from "./components/LoggedInComponent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./apis/firebase";
//import { FavoritesContext } from "./context/FavoritesContext";


const App = () => {
  const [user, isLoading] = useAuthState(auth);
  let navigate = useNavigate();
  const handleNavigation = (address) => {
    navigate(address.toLowerCase());
  };

  if (!isLoading) {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="favorites" element={
            <LoggedInComponent>
              <Favorites user={user?.email} navHandler={handleNavigation} />
            </LoggedInComponent>} />
          <Route path="games/:id" element={
            <LoggedInComponent>
              <Details handleNav={handleNavigation} user={user?.email} />
            </LoggedInComponent>} />
          <Route path="login" element={<Login isSignUp={false}/>} />
          <Route path="register" element={<Register isSignUp={true}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    );
  }
};

export default App;
