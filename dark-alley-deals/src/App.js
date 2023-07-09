import { useEffect } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import AppBar from "./components/appBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Dark Alley Deals";
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{ background: "#212121" }}>
          <AppBar />
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
