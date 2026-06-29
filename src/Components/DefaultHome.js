import Header from "./Header"
import VideoTemplate from "./VideoTemplate"
import TdeeCal from "./TdeeCal"
import Footer from "./Footer.js"
const DefaultHome=()=>{
    return(
        <div className="pt-25">
            <Header/>
            <VideoTemplate/>
            <TdeeCal/>
            <Footer/>
        </div>
    )
}

export default DefaultHome;