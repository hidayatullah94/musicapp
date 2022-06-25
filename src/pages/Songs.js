import React from "react";
import { useState } from "react";

const Songs = ({ Storage }) => {
  const [song, setSong] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSong({
      ...song,
      title: e.target.title.value,
      year: e.target.year.value,
      performer: e.target.performer.value,
      duration: e.target.duration.value,
      genre: e.target.genre.value,
    });

    Storage(song);
    console.log("data", song);
  };
  return (
    <div>
      <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-md-6">
          <label for="title" class="form-label">
            Title
          </label>
          <input type="text" class="form-control" id="title" name="title" />
        </div>
        <div class="col-md-6">
          <label for="year" class="form-label">
            Year
          </label>
          <input type="date" class="form-control" id="year" name="year" />
        </div>
        <div class="col-12">
          <label for="performer" class="form-label">
            Performer
          </label>
          <input type="text" class="form-control" id="performer" />
        </div>
        <div class="col-md-6">
          <label for="duration" class="form-label">
            Duration
          </label>
          <input type="text" class="form-control" id="duration" />
        </div>
        <div class="col-md-4">
          <label for="genre" class="form-label">
            Genre
          </label>
          <select id="genre" class="form-select">
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="jaz">Jaz</option>
          </select>
        </div>
        <div class="col-12">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Songs;
