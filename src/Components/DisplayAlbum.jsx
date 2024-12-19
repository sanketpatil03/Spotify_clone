import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import playerContext from "../Context/PlayerContext";
const DisplayAlbum = () => {
    const {id} = useParams();
    const albumData= albumsData[id];
    const {playWithId} = useContext(playerContext);
  return (
    <>
        <Navbar/>
        <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
            <img src={albumData.image} alt="" className="w-48 rounded"/>
            <div className="flex flex-col">
                <p>Playlist</p>
                <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className="mt-1">
                    <img src={assets.spotify_logo} alt=""  className="inline-block w-5"/>
                    <b>Spotify</b>
                    . 1,323,154 likes
                    . <b>50 songs,</b>
                    about 2 hr 30 min
                </p>
            </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
            <p className="mr-4"><b>#</b>Title</p>
            <p >Album</p>
            <p className="hidden sm:block">Date Added</p>
            <img className="m-auto w-4" src={assets.clock_icon} alt="" />
        </div>
        <hr />
        {
            songsData.map((song, index)=>(
                <div key={index} onClick={()=> playWithId(song.id)} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center hover:bg-[#ffffff26]">
                    <p className="text-white">
                        <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
                        <img src={song.image} alt="" className="inline w-10 mr-5"/>
                        {song.name}
                    </p>
                    <p className="text-[15px]">{song.name}</p>
                    <p className="text-[15px] hidden sm:block">5 days ago</p>
                    <p className="text-center text-[15px]">{song.duration}</p>
                </div>
            ))
        }
    </>
  )
}

export default DisplayAlbum