import { useState } from "react";
import trackList from "../../assets/trackList";
import Track from "../../components/Track/Track";
import style from "./MainPage.module.scss";
import { Input } from "@mui/material";

const runSearch = (query) => {
  if (!query) {
    return trackList;
  }

  const lowerCaseQuery = query.toLowerCase();
  return trackList.filter(
    (track) =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)
  );
};

const MainPage = () => {
  const [tracks, setTracks] = useState(trackList);

  const handleChange = (e) => {
    const filteredTracks = runSearch(e.target.value);
    setTracks(filteredTracks);
  };
  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Search tracks..."
        onChange={handleChange}
      />
      <div className={style.list}>
        {tracks.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
