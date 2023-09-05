import { Route } from "react-router-dom";

//User Pages dfsfsfsf
import Register from "./components/Register";
import Terms from "./components/Terms";
import Login from "./components/Login";
import Forget from "./components/Forget";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Insert from "./components/Insert";
import Update from "./components/Update";
import View from "./components/View";
import Donations from "./components/Donations";
import Donationcard from "./components/Donationcard";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

//Admin pages
import Adminnav from "./components/Adminnav";
import Adminreq from "./components/Adminreq";
import Adminview from "./components/Adminview";
import Adminusers from "./components/Adminusers";
import LandingPage from "./components/LandingPage"

function App() {
  return (
    <div>
      {/* User Routes */}

      <Route exact path="/">
        <LandingPage />
      </Route>


      <Route exact path="/login">
        <Login />
      </Route>
     

      <Route exact path="/forget">
        <Forget />
      </Route>

      <Route exact path="/register">
        <Register />
        </Route>
      
      
      <Route exact path="/home">
        <Navbar />
        <Home />
        <Footer />
      </Route>
      
      <Route exact path="/aboutus">
        <Navbar />
        <About />
        <Footer />
      </Route>
      
      <Route exact path="/termsandconditions">
        <Terms />
      </Route>
      
      <Route exact path="/donate">
        <Navbar />
        <Insert />
        <Footer />
      </Route>
      
      <Route exact path="/update">
        <Navbar />
        <Update />
        <Footer />
      </Route>
      
      <Route exact path="/view">
        <Navbar />
        <View />
        <Footer />
      </Route>
      
      <Route exact path="/donations">
        <Navbar />
        <Donations />
        <Footer />
      </Route>
      
      <Route exact path="/card">
        <Donationcard />
      </Route>
      
      <Route exact path="/profile">
        <Navbar />
        <Profile />
        <Footer />
      </Route>

      {/* Admin routes */}
      <Route exact path="/admin">
        <Adminnav />
        <Adminreq />
      </Route>
      
      <Route exact path="/adminview">
        <Adminnav />
        <Adminview />
      </Route>
      
      <Route exact path="/adminusers">
        <Adminnav />
        <Adminusers />
      </Route>
    </div>
  );
}
export default App;
