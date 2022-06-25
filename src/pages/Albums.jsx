import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";

const Albums = () => {

  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios('http://localhost:5000/api/albums/read', {
      method: "GET",
      headers: {
        "Conent-Type": "application/json"
      },
      responseType: "json"
    })
      .then(res => {
        setAlbums(res.data.query)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return <div className="container-fluid pt-2">
    <div className="row p-4">
        <table className="table">
          <thead className="">
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">year</th>
              <th scope="col">songs</th>
              <th scope="col">created at</th>
            </tr>
          </thead>

          <tbody>
            {albums.map((e) => (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.year}</td>
                  <td>{e._count.songs}</td>
                  <td>{moment(e.createdAt).fromNow()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
  </div>;
};

export default Albums;
