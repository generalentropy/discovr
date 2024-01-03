import DiscordLogo from "./DiscordLogo";

function SearchBar({ children, searchQuery, setSearchQuery }) {
  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="search-wrapper">
      <div className="title">
        Chercher un serveur
        <span>
          <DiscordLogo width="38px" height="38px" />
        </span>
      </div>

      <form>
        <label htmlFor="search">Search</label>
        <input
          onChange={(e) => handleSearch(e)}
          className="search"
          type="search"
          id="search"
          placeholder="Chercher par nom, centre d'intérêt, tag..."
          autoComplete="off"
          value={searchQuery}
        ></input>
      </form>
      {children}
    </div>
  );
}

export default SearchBar;
