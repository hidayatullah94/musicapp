import { createContext, useState } from "react";

export const SongsContext = createContext();

const SongsContextProvider = ({ children }) => {
  const [songs, setSongs] = useState({
    title: "",
    year: "",
    genre: "",
    performer: "",
    duration: "",
  });

  return <SongsContext.Provider value={[songs, setSongs]}>{children}</SongsContext.Provider>;
};

export default SongsContextProvider;
