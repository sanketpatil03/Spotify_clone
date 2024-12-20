import { Routes,Route, useLocation } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"
import { useEffect, useRef } from "react";
import { albumsData } from "../assets/assets";

const Display = () => {
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgcolor = albumsData[Number(albumId)].bgColor;
 const displayRef = useRef();
 useEffect(()=>{
  if(isAlbum)
  {
    displayRef.current.style.background = `linear-gradient(${bgcolor}, #121212)`;
  }else{
    displayRef.current.style.background = `#121212`;
  }
 })
  return (
    <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg: ml-0">
        <Routes>
            <Route path="/" element={<DisplayHome/>}></Route>
            <Route path="/album/:id" element={<DisplayAlbum/>}></Route>
        </Routes>
    </div>
  )
}

export default Display