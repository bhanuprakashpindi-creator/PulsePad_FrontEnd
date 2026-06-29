import { useSelector } from "react-redux";
const Logo=new URL("../../images/logo.png",import.meta.url).toString();
import Quotes from "./Quotes.js";
const userProfile=new URL("../../images/userDefaultprofile.png",import.meta.url).toString();




const GuestHeader=()=>
{

    const user=useSelector((store)=>store.user);
    console.log(user);
    return(
        <div className="header fixed top-0 left-0 w-full z-50 h-auto shadow-xl bg-white items-center flex justify-between">
            <div className="image h-auto w-[120px] p-4  items-baseline">
                <img src={Logo}/>
                <h1 className="text-gray-400 font-bold mb-0 mx-2 leading-none">PulsePad</h1>
            </div>
            <div className="Quotes">

                <Quotes/>

            </div>

            <div className="flex items-center p-4 g-4 translate-y-3">
              
              <div className="usernamen">

                <h1 className="text-2xl font-semibold font-mono p-4">Guest</h1>

              </div>

              <div className="photo">

                <img
                src={userProfile}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover mb-6 border-4 border-gray-200"
                />
                 
                </div>


            </div>
        </div>
    )
}


export default GuestHeader;



