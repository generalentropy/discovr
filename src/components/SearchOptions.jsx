import Switch from "@mui/material/Switch";
import { useState } from "react";

function SearchOptions() {
  const [tagsChecked, setTagsChecked] = useState(true);
  const [descriptionChecked, setDescriptionChecked] = useState(false);
  const [nameChecked, setNameChecked] = useState(false);

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
