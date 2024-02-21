import { StyledEngineProvider, ThemeProvider } from "@mui/system";
import Routes from "./routes";
import { CssBaseline } from "@mui/material";
import NavigationScroll from "./layout/NavigationScroll";
import themes from "./themes";
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes()}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
