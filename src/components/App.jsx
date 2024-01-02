import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

import AppContainer from "./Container";
import Header from "./Header";
import CardsContainer from "./Cards";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import SearchOptions from "./SearchOptions";
import Documentation from "../pages/Documentation";
import PageNotFound from "../pages/PageNotFound";
import Form from "./Form";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar>
                    <SearchOptions />
                  </SearchBar>
                  <CardsContainer>
                    <SortBy />
                  </CardsContainer>
                </>
              }
            ></Route>
            <Route path="/documentation" element={<Documentation />}></Route>
            <Route path="/feedback" element={<Form />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
