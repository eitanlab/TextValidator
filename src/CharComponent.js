import React, { Fragment } from "react";

const styles = {
  display: "inline-block",
  padding: "16px",
  textAlign: "center",
  margin: "16px",
  border: "1px solid"
};

const CharComponent = props => {
  return (
    <Fragment>
      <button
        key={props.index}
        data-index={props.index}
        value={props.item}
        onClick={props.handleClick}
        style={styles}
      >
        {props.item}
      </button>
    </Fragment>
  );
};

export default CharComponent;
