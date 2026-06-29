import VideoTemplate from "./VideoTemplate.js"
import TdeeCal from "./TdeeCal.js"
import Footer from "./Footer.js"
import Jurnoldash from "./Jurnoldash.js"
import GuestHeader from "./GuestHeader.js"

const GuestHome=()=>{
    return(
        <div className="pt-24">
            <GuestHeader/>
            <VideoTemplate/>
            <Jurnoldash/>
            <TdeeCal/>
            <Footer/>
        </div>
        
    )
}


export default GuestHome;