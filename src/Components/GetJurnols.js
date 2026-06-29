import { useEffect, useState } from "react";
import axios from "axios";

const GetJurnols = () => {
  const [jurnols, setJurnols] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchJurnols = async () => {
    setErrorMsg("");
    try {
      const res = await axios.get("https://pulsepad-backend.onrender.com", {
        withCredentials: true,
      });
      setJurnols(res.data);
    } catch (err) {
      setErrorMsg("Failed to fetch journals: " + err.message);
    }
  };

  useEffect(() => {
    fetchJurnols();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
      <h2 className="text-2xl font-bold mb-6">Your Journals</h2>

      {errorMsg && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
          {errorMsg}
        </div>
      )}

      {jurnols.length === 0 ? (
        <p className="text-gray-600">No journals found.</p>
      ) : (
        <div className="w-full max-w-3xl grid grid-cols-1 gap-4">
          {jurnols.map((j) => (
            <div
              key={j._id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Description:</span> {j.description}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Discipline:</span> {j.discipline}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Day Weight:</span> {j.dayWeight} kg
              </p>
              {j.supplements && (
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Supplements:</span> {j.supplements}
                </p>
              )}
              {j.dayWorkouts && (
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Day Workouts:</span> {j.dayWorkouts}
                </p>
              )}
              <p className="text-gray-400 text-sm">
                Created on: {new Date(j.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetJurnols;
