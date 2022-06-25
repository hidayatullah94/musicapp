import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Songs = ({ Storage }) => {
  const [song, setSong] = useState("");
  const [albums, setAlbums] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createAlbum = await axios('http://localhost:5000/api/song/create', {
      method: "POST",
      data: {
        title: e.target.title.value,
        year: parseInt(e.target.year.value),
        performer: e.target.performer.value,
        duration: parseInt(e.target.duration.value),
        genre: e.target.genre.value,
        album_id: e.target.album_id.value
      },
      headers: {
        "Content-Type": "application/json"
      },
      responseType: "json"

    }).then(res => {
      if (res.status === 201) {
        alert("Berhasil tambah album")
        window.location.reload()
      }
    }).catch(err => {
      console.info(err.response.data)
    })

    // Storage(song);
    // console.log("data", song);
  };

  const readAlbum = async () => {
    const getAlbum = await axios('http://localhost:5000/api/albums/read', {
      method: "GET"
    })

    return getAlbum.data
  }

  useEffect(() => {
    readAlbum().then(res => {
      setAlbums(res.query)
    })
  }, [])

  return (
    <div className="p-5">
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
          <input type="number" class="form-control" id="duration" name="duration" />
        </div>
        <div class="col-md-4">
          <label for="genre" class="form-label">
            Genre
          </label>
          <select id="genre" class="form-select" name="genre">
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="jaz">Jaz</option>
          </select>
        </div>

        <div class="col-md-4">
          <label for="albums" class="form-label">
            albums
          </label>
          <select id="album_id" class="form-select" name="album_id">
            {albums.map((e) => (
              <option value={e.id} key={e.id}>{e.name}</option>
            ))}
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
