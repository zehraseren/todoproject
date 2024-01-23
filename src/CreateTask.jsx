import React from "react";

export default function CreateTask() {
  return (
    <div className="todoDivArea">
      <form className="todoDiv">
        <input
          type="text"
          className="form-control todoText mb-3"
          name="title"
          placeholder="Başlık"
        />
        <textarea
          name="content"
          className="form-control todoText mb-3"
          rows="3"
          placeholder="İşinizi yazınız"
        ></textarea>
        <button className="btn btn-primary todoButton">Ekle</button>
      </form>
    </div>
  );
}
