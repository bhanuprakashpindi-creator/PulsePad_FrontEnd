import { useEffect, useState } from "react";

const Quotes=()=>{
    const quotes = [
    "Stay fit, stay healthy!",
    "Consistency is the key to success.",
    "Push yourself, because no one else will.",
    "Small steps every day lead to big results.",
  ];

  const [currentIndex,setCurrentIndex]=useState(0);

  useEffect(()=>{
    const interval=setInterval(()=>{
        setCurrentIndex((p)=>(p+1)%quotes.length)
    },3000
    )

    return ()=>{
        clearInterval(interval);
    }
  },[])

  return(
    <div className="Quotes">

                <h1 className="font-mono font-extrabold text-2xl text-gray-500 ml-10">"{quotes[currentIndex]}"</h1>

            </div>
  )
}

export default Quotes;