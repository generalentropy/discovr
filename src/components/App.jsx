import AppContainer from "./Container";
import Header from "./Header";
import Logo from "./Logo";
import Card from "./Card";
import CardContainer from "./Cards";
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

      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </AppContainer>
  );
}

export default App;
