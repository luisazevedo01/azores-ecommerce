import { useState } from "react";
import { DIRECTORIES } from "../../../mocks/directories";

import MenuItem from "../../Molecules/MenuItem/MenuItem";

import "./Directory.styles.scss";

const Directory = (): JSX.Element => {
  const [sections, setSections] = useState(DIRECTORIES);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={`menu_item_${id}`} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
