import VideoTemplate from "./VideoTemplate.js"
import TdeeCal from "./TdeeCal.js"
import Footer from "./Footer.js"
import UserHeader from "./UserHeader.js"    
import Jurnoldash from "./Jurnoldash.js"

const UserHome=()=>{
    return(
        <div className="pt-24">
            <UserHeader/>
            <VideoTemplate/>
            <Jurnoldash/>
            <TdeeCal/>
            <Footer/>
        </div>
        
    )
}


export default UserHome;