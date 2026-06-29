import axios from "axios";
import { useState } from "react";

const CreateJurnol=()=>{
    const [description, setDescription] = useState("");
    const [discipline, setDiscipline] = useState("Strictly"); 
    const [dayWeight, setDayWeight] = useState("");
    const [supplements, setSupplements] = useState("");
    const [dayWorkouts, setDayWorkouts] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");


    const handleSubmit=async()=>{
        
        setErrorMsg("");
        setSuccessMsg("");

    if (!description || !discipline || !dayWeight) {
      setErrorMsg("Description, discipline, and day weight are required");
      return;
    }

    try{
        const res=await axios.post("http://localhost:7777/jurnols/writejurnol",
        { description, discipline, dayWeight, supplements, dayWorkouts },
        { withCredentials: true })

        if (res.data && res.data._id) {
        setSuccessMsg("Journal created successfully!");
        setDescription("");
        setDiscipline("Strictly");
        setDayWeight("");
        setSupplements("");
        setDayWorkouts("");
      }
    }
    catch(err)
    {
        setErrorMsg("Filed to create Jurnol"+err)
    }

   };

   return(

   <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">New Journal</h2>

        {errorMsg && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-sm">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-2 text-sm">
            {successMsg}
          </div>
        )}

        <label className="block mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded mb-3"
          placeholder="Write your journal..."
        />

        <label className="block mb-2">Discipline</label>
        <select
          value={discipline}
          onChange={(e) => setDiscipline(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        >
          <option value="Strictly">Strictly</option>
          <option value="Moderate">Moderate</option>
          <option value="Cheat">Cheat</option>
        </select>

        <label className="block mb-2">Day Weight</label>
        <input
          type="number"
          value={dayWeight}
          onChange={(e) => setDayWeight(e.target.value)}
          className="w-full border p-2 rounded mb-3"
          placeholder="Enter your weight"
        />

        <label className="block mb-2">Supplements</label>
        <input
          type="text"
          value={supplements}
          onChange={(e) => setSupplements(e.target.value)}
          className="w-full border p-2 rounded mb-3"
          placeholder="Optional"
        />

        <label className="block mb-2">Day Workouts</label>
        <input
          type="text"
          value={dayWorkouts}
          onChange={(e) => setDayWorkouts(e.target.value)}
          className="w-full border p-2 rounded mb-3"
          placeholder="Optional"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-900 transition"
        >
          Create Journal
        </button>
      </div>
    </div>
  );


}

export default CreateJurnol;