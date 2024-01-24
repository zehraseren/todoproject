import React from "react";

export default function Task(props) {
  const deleteClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="col-md-3 mb-3 mx-3">
      <div className="contentDiv">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="btn btn-danger" onClick={deleteClick}>Sil</button>
      </div>
    </div>
  );
}
