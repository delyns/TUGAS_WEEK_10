import React, { useState } from "react";

function Entry(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="term" onClick={handleClick}>
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      {isExpanded ? (
        <dd className="expanded-meaning">{props.meaning}</dd>
      ) : (
        <dd>{props.meaning.substring(0, 50)}...</dd>
      )}
      <small>{isExpanded ? "Click to show less" : "Click to show more"}</small>
    </div>
  );
}

export default Entry;
