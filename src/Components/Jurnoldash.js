import { jurnolImg } from "../utils/Constants";
import { useNavigate } from "react-router-dom";

const Jurnoldash=()=>{
    const navigate=useNavigate();
    const handleCreate = () => {
        navigate("/createJurnol"); 
    };

    const handleGetJurnol=()=>{
        navigate("/AllJurnols")
    }
    return(
        <div className="jurnoldash  max-w-[1000px] mx-auto h-auto mt-10">

        <div className="text-center rounded-xl shadow-2xl bg-white mb-10">
             <h2 className="text-4xl p-4 font-bold text-gray-600 font-mono">Journals</h2>
        </div>
        <div className="buttons flex justify-between items-center px-10">
            <div className="createbtn ">
                            <button onClick={handleCreate} className="
                flex items-center gap-2 
                bg-gray-400 backdrop-blur-md 
                border border-white/30 
                text-white text-lg font-bold 
                py-3 px-5 rounded-xl 
                shadow-lg 
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-2xl 
                cursor-pointer
                ">
                <span>Create</span>
                <img src={jurnolImg} alt="Notebook" className="w-5 h-5"/>
            </button>

            </div>
             
      
             <div className="getbtn">
                <button onClick={handleGetJurnol} className="
                flex items-center gap-2 
                bg-gray-400 backdrop-blur-md 
                border border-white/30 
                text-white text-lg font-bold 
                py-3 px-5 rounded-xl 
                shadow-lg 
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-2xl 
                cursor-pointer
                ">
                <span>All Jurnols</span>
                <img src={jurnolImg} alt="Notebook" className="w-5 h-5"/>
            </button>
            </div>

            <div className="deletebtn">
                <button className="
                flex items-center gap-2 
                bg-gray-400 backdrop-blur-md 
                border border-white/30 
                text-white text-lg font-bold 
                py-3 px-5 rounded-xl 
                shadow-lg 
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-2xl 
                cursor-pointer
                ">
                <span>Delete</span>
                <img src={jurnolImg} alt="Notebook" className="w-5 h-5"/>
            </button>
            </div>


        </div>
         

        </div>
    )
}

export default Jurnoldash;