import AppContainer from "./Container";
import Header from "./Header";
import Logo from "./Logo";
import Card from "./Card";
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

      <CardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>
    </AppContainer>
  );
}

export default App;
