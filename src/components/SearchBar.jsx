import DiscordLogo from "./DiscordLogo";

function SearchBar() {
  return (
    <div className="search-wrapper">
      <div className="title">
        Chercher un serveur
        <span>
          <DiscordLogo width="38px" height="38px" />
        </span>
      </div>

      <input
        type="search"
        id="search"
        placeholder="Chercher par nom, centre d'intérêt, tag..."
      ></input>
    </div>
  );
}

export default SearchBar;
