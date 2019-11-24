import React, { Fragment } from "react";

const ValidationComponent = props => {
  const textLengthValidator = length =>
    length <= 5 ? "Text too short" : "Text long enough";

  return (
    <Fragment>
      <p>{textLengthValidator(props.length)}</p>
    </Fragment>
  );
};

export default ValidationComponent;
