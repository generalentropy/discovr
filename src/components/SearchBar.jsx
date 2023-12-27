import DiscordLogo from "./DiscordLogo";
// import SearchIcon from "./SearchIcon";

function SearchBar() {
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
          className="search"
          type="search"
          id="search"
          placeholder="Chercher par nom, centre d'intérêt, tag..."
          autoComplete="off"
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;
