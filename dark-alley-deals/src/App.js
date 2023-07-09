import { useEffect } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import AppBar from "./components/appBar";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./views/places/Home";
import Clothes from "./views/places/Clothes.js";
import Pets from "./views/places/Pets.js";
import Vehicles from "./views/places/Vehicles.js";
import Weapons from "./views/places/Weapons.js";
import SignIn from "./views/places/SignIn";
import SignUp from "./views/places/SignUp";

function App() {
  useEffect(() => {
    document.title = "Dark Alley Deals";
  }, []);

  return (
    
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{ background: "#212121" }}>
          <BrowserRouter>
          <AppBar />
            <Routes exact path="./views/places/Home" component={Home} />
            <Routes exact path="./views/places/Clothes.js" component={Clothes} />
            <Routes exact path="./views/places/Pets.js" component={Pets} />
            <Routes exact path="./views/places/Vehicles.js" component={Vehicles} />
            <Routes exact path="./views/places/Weapons.js" component={Weapons} />
            <Routes exact path="./views/places/SignIn.js" component={SignIn} />
            <Routes exact path="./views/places/SignUp.js" component={SignUp} />
          </BrowserRouter>
        </Container>
      </ThemeProvider>
   
  );
}

export default App;
