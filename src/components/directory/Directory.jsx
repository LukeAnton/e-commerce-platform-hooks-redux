import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelector";

import "./directory.scss";
import MenuItem from "../menuItem/MenuItem";

const Directory = ({ sections }) => {
  // eslint-disable-next-line

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);

// <div className="directory-menu">
// {sections.map(({ id, title }) => (
//   <MenuItem key={id} title={title} />
// ))}
// </div>
