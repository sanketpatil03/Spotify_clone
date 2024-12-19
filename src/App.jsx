import Display from "./Components/Display"
import Player from "./Components/Player"
import SideBar from "./Components/SideBar"
import { useContext } from "react"
import playerContext from "./Context/PlayerContext"
const App = () => {

  const {audioRef,track} = useContext(playerContext)
  return (
    <div className="h-screen bg-black">
        <div className="h-[90%] flex">
          <SideBar/>
          <Display/>
        </div>
        <Player/>
        <audio ref={audioRef} preload="auto" src={track.file}></audio>
    </div>
  )
}

export default App