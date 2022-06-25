import React from "react";
import { useContext } from "react";

import { SongsContext } from "../context/SOngsContext";
import axios from "axios";

function Form() {
  const [songs, setSong] = useContext(SongsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSong({
      ...songs,
      title: e.target.title.value,
      year: e.target.year.value,
      performer: e.target.performer.value,
      duration: e.target.duration.value,
      genre: e.target.genre.value,
    });

    axios(`http://localhost:5000/songs`, {
      method: "POST",
      data: {
        title: e.target.title.value,
        year: 2020,
        performer: e.target.performer.value,
        duration: 5000,
        genre: e.target.genre.value,
      },
      headers: {
        "content-type": "aplication/json",
      },
      responseType: "json",
    })
      .then((response) => {
        const song = response.data;
        console.log("datanya", song);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("data", songs);
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
}

export default Form;
