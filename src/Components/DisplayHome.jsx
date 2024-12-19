import Navbar from "./Navbar"
import { albumsData, songsData } from "../assets/assets"
import AlbumItems from "./AlbumItems"
import SongItem from "./SongItem"
const DisplayHome = () => {
  return (
   <>
    <Navbar/>
    <div className="mb-4">
      <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto"> 
           {albumsData.map((album,index)=>( <AlbumItems key={index} name={album.name} desc={album.desc} id={album.id} image={album.image} />))}
        </div>
    </div>

    <div className="mb-4">
      <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto"> 
           {songsData.map((song,index)=>( <SongItem key={index} name={song.name} dsec={song.desc} image={song.image} id={song.id }/> ))}
        </div>
    </div>
   </>
  )
}

export default DisplayHome