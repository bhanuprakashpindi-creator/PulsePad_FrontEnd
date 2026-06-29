const Logo=new URL("../../images/logo.png",import.meta.url).toString();
import Quotes from "./Quotes.js";
import { Link } from "react-router-dom";    
const Header=()=>
{
    return(
        <div className="header fixed top-0 left-0 w-full z-50 h-auto shadow-xl bg-white items-center flex justify-between">
            <div className="image h-auto w-[120px] p-4  items-baseline">
                <img src={Logo}/>
                <h1 className="text-gray-400 font-bold mb-0 mx-2 leading-none">PulsePad</h1>
            </div>
            <div className="Quotes">

                <Quotes/>

            </div>

            <div className="login/signup flex items-center p-4">
             <div className="signup">

                <Link to="/signup"><h1 className="text-gray-400 font-bold my-0 mx-2 leading-none mr-15 text-xl hover:cursor-pointer hover:underline hover:decoration-gray hover:underline-offset-2 transition-all duration-300">SignUp</h1></Link>
              </div>


              
              <div className="login">

                <Link to="/login"><h1 className="text-gray-400 font-bold my-0 mx-2 leading-none mr-15 text-xl hover:cursor-pointer hover:underline hover:decoration-gray hover:underline-offset-2 transition-all duration-300">Login</h1></Link>
              </div>

              <div className="signup">
                 
                 <Link to="/guest"><h1 className="text-gray-400 font-bold my-0 mx-2 leading-none text-xl mr-15 hover:cursor-pointer hover:underline hover:decoration-gray underline-offset-2 transition-all duration-300">Guest</h1></Link>

                </div>


            </div>
        </div>
    )
}


export default Header;



