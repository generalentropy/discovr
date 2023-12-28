import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import AppContainer from "./Container";
import Header from "./Header";
import Logo from "./Logo";
import CardsContainer from "./Cards";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import SearchOptions from "./SearchOptions";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header>
          <Logo />
        </Header>
        <SearchBar>
          <SearchOptions />
        </SearchBar>

        <SortBy />

        <CardsContainer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
