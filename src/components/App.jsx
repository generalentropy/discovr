import AppContainer from "./Container";
import Header from "./Header";
import Logo from "./Logo";

import CardsContainer from "./Cards";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";

function App() {
  return (
    <AppContainer>
      <Header>
        <Logo />
      </Header>
      <SearchBar />
      <SortBy />

      <CardsContainer />
    </AppContainer>
  );
}

export default App;
