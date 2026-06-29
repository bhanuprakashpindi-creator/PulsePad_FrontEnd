import React,{useState } from "react";
import Tdeeresult from "./Tdeeresult.js";

const TdeeCal=()=>{

        const [age, setAge] = useState("");
        const [height, setHeight] = useState("");
        const [weight, setWeight] = useState("");
        const [gender, setGender] = useState("");
        const [activity, setActivity] = useState("");
        const [result, setResult] = useState(null);

        const handleCalculate=()=>{

            if(!age || !height || !weight || !gender || !activity)
            {
                alert("Please Fill all Missing Feilds")
                return;
            }

            const ageNum = parseInt(age);
            const heightNum = parseFloat(height);
            const weightNum = parseFloat(weight);

            const heighMeter=heightNum/100;
            const bmi=(weightNum/(heighMeter*heighMeter)).toFixed(2);

            let bmr=0;
            if(gender==="male")
            {
                bmr=10*weightNum + 6.25*heightNum - 5*ageNum +5;

            }
            else if(gender==="female")
            {
                bmr=10*weightNum + 6.25*heightNum - 5*ageNum - 161;

            }
            else{

                bmr=10*weightNum + 6.25*heightNum -5*ageNum;

            }

            const activityFactors={
                sedentary: 1.2,
                light: 1.375,
                moderate: 1.55,
                active: 1.725,
                "very-active": 1.9,
            }

            const tdee=(bmr*activityFactors[activity]).toFixed(0);
            setResult({bmi,tdee});

        }
    return(
        <div className="shadow-2xl bg-white max-w-[1000px] mx-auto h-[650px] mt-10  rounded-4xl overflow-hidden items-center">

            <div className="text-center bg-[#657e79] flex justify-center items-baseline gap-3 ">
                <h1 className="font-extrabold text-7xl  text-white leading-none">TDEE</h1>
                <h3 className="font-bold text-4xl text-white">Calculator</h3>
            </div>

            <div className="drop-shadow-2xl mt-15 bg-white max-w-[500px] mx-auto h-auto  rounded-4xl flex flex-col items-center p-6 gap-4">

                <input type="number"  placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded-xl hover:cursor-pointer hover:ring-2 hover:ring-orange-400 focus:outline-none" />
                <input type="number"  placeholder="Height(cm)" value={height} onChange={(e)=>setHeight(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl hover:cursor-pointer focus:outline-none hover:ring-2 hover:ring-green-400" />
                <input type="number"  placeholder="Weight(kg)" value={weight} onChange={(e)=>setWeight(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none hover:ring-2 hover:ring-blue-400 hover:cursor-pointer" />
                <select className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none hover:cursor-pointer hover:ring-2 hover:ring-purple-400"
                         value={gender} onChange={(e)=>setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                </select>
                 <select className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none hover:ring-2 hover:ring-indigo-400 hover:cursor-pointer"
                        value={activity} onChange={(e)=>setActivity(e.target.value)}>
                        <option value="">Activity Level</option>
                        <option value="sedentary">Sedentary</option>
                        <option value="light">Light</option>
                        <option value="moderate">Moderate</option>
                        <option value="active">Active</option>
                        <option value="very-active">Very Active</option>
                 </select>

                  <button onClick={handleCalculate}
                  className=" hover:cursor-pointer text-2xl w-[200px] bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 text-white font-bold py-3 rounded-xl hover:opacity-90 transition duration-300">
                     Calculate
                  </button>

            </div>


            {result && (
                <Tdeeresult
                   bmi={result.bmi}
                   tdee={result.tdee}
                   onClose={()=>setResult(null)}
                   />
            )}


        </div>
    )
}

export default TdeeCal;