import MainPage from "./pages/MainPage/MainPage";
import style from "./global.module.scss";
import Playbar from "./components/Playbar/Playbar";
import { useContext } from "react";
import { AudioContext } from "./context/AudioContext";

const App = () => {
  const { isPlaying } = useContext(AudioContext);
  return (
    <div className={style.wrapper}>
      <MainPage />
      {/* {isPlaying && <Playbar />} */}
      <Playbar />
    </div>
  );
};

export default App;
