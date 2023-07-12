import { useEffect } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import AppBar from "./components/appBar";
import { BrowserRouter, Routes } from "react-router-dom";
import Sell from "./views/Sell.js";

function App() {
  useEffect(() => {
    document.title = "Dark Alley Deals";
  }, []);

  return (
    
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{ background: "#212121" }}>
          <BrowserRouter>
          <AppBar />
            <Routes exact path="./views/Sell.js" component={Sell} />
          </BrowserRouter>
        </Container>
      </ThemeProvider>
   
  );
}

export default App;
