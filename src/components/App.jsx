import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// const cachedValue = useMemo(calculateValue, dependencies)

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [serversList, setServersList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [tagsChecked, setTagsChecked] = useState(true);
  const [descriptionChecked, setDescriptionChecked] = useState(false);
  const [nameChecked, setNameChecked] = useState(false);

  const filtered = serversList.filter((serv) => {
    const tags = tagsChecked ? serv.tags.join(" ") : "";
    const description = descriptionChecked ? serv.description : "";
    const name = nameChecked ? serv.nom : "";

    const search = `${name} ${description} ${tags}`;

    const result = search.toLowerCase().includes(searchQuery.toLowerCase());

    return result;
  });

  const searchedServer = searchQuery.length > 0 ? filtered : serversList;

  useEffect(() => {
    console.log("effect");
    const fetchData = async function () {
      try {
        setIsLoading(true);

        const res = await fetch("/recolte.json");

        if (!res.ok) {
          throw new Error(
            `Erreur lors de la récupération des données ${res.status}`
          );
        }
        const data = await res.json();

        setServersList(data.serveurs);
        setIsLoading(false);
      } catch (error) {
        if (
          (error.name === "TypeError" &&
            error.message.includes("NetworkError")) ||
          error.message.includes("Failed to fetch")
        ) {
          setError(
            "Erreur réseau : impossible de se connecter au serveur de données."
          );
          setIsLoading(false);
        } else {
          console.log(error.message);
          setError(
            `Une erreur est survenue lors de la récupération des données: ${error.message}`
          );
          setIsLoading(false);
        }
      } finally {
        console.log("end");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
                  <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  >
                    <SearchOptions
                      tagsChecked={tagsChecked}
                      setTagsChecked={setTagsChecked}
                      descriptionChecked={descriptionChecked}
                      setDescriptionChecked={setDescriptionChecked}
                      nameChecked={nameChecked}
                      setNameChecked={setNameChecked}
                    />
                  </SearchBar>
                  <CardsContainer
                    searchQuery={searchQuery}
                    isLoading={isLoading}
                    error={error}
                    serversList={searchedServer}
                  >
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
