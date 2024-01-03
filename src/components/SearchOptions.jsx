import Switch from "@mui/material/Switch";

function SearchOptions({
  tagsChecked,
  setTagsChecked,
  descriptionChecked,
  setDescriptionChecked,
  nameChecked,
  setNameChecked,
}) {
  return (
    <div className="search-options">
      <span className="option">Options de recherche :</span>
      <span>
        Tags
        <Switch
          name="tags"
          checked={tagsChecked}
          onChange={() => setTagsChecked(!tagsChecked)}
        />
      </span>
      <span>
        Description
        <Switch
          name="description"
          checked={descriptionChecked}
          onChange={() => setDescriptionChecked(!descriptionChecked)}
        />
      </span>

      <span>
        Nom
        <Switch
          name="name"
          checked={nameChecked}
          onChange={() => setNameChecked(!nameChecked)}
        />
      </span>
    </div>
  );
}

export default SearchOptions;
