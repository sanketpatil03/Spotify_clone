
import { useNavigate } from "react-router-dom"
import {assets} from "../assets/assets"
const SideBar = () => {
    const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
        <div className="bg-[#121212]  h-[15%] rounded flex flex-col justify-around">
            <div className="flex items-center gap-3 cursor-pointer pl-8" onClick={()=> navigate("/")}>
                <img src={assets.home_icon} alt="" className="w-6"/>
                <p className="font-bold">Home</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer pl-8">
                <img src={assets.search_icon} alt="" className="w-6"/>
                <p className="font-bold">Search</p>
            </div>
        </div>

        <div className="bg-[#121212] h-[85%]">
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img className="w-8" src={assets.stack_icon} alt="" />
                    <p>Your Library</p>
                </div>
                <div className="flex items-center gap-3">
                    <img src={assets.arrow_icon} alt="" className="w-5" />
                    <img src={assets.plus_icon} alt="" className="w-5"/>
                </div>
            </div>
            <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-2">
                <h1>Create your first playlist</h1>
                <p className="font-light">it's easy we will help you</p>
                <button className="bg-white text-black px-4 py-1.5 text-[15px] rounded-full mt-4">Create Playlist</button>
            </div>

            <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-2">
                <h1>Let's findsome podcasts to follow</h1>
                <p className="font-light">We'll keep you update on new episodes </p>
                <button className="bg-white text-black px-4 py-1.5 text-[15px] rounded-full mt-4">Browse Podcasts</button>
            </div>
        </div>
    </div>
  )
}

export default SideBar