import { useState } from "react";
import axios from "axios";
const signupImg = new URL("../../images/loginImg.jpg", import.meta.url).toString();
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    setErrorMsg("");
    setSuccessMsg("");

    if (!name || !email || !password || !gender) {
      setErrorMsg("All fields are required");
      return;
    }

    try {
      const res = await axios.post(
        "https://pulsepad-backend.onrender.com",
        { name, email, password, gender },
        { withCredentials: true }
      );

      if (res.data === "SuccesFull") {
        setSuccessMsg("Signup successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setErrorMsg(res.data || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong, please try again.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover flex justify-center items-center"
      style={{
        background: `linear-gradient(90deg, rgba(105,52,12,1) 0%, rgba(204,144,84,1) 44%, rgba(193,152,104,1) 100%)`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="signup-box flex shadow-2xl bg-white h-auto w-[700px] mt-25 overflow-hidden rounded-4xl mb-15">
        <div className="form w-1/2 p-5 flex flex-col justify-center gap-4">
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

          <label className="text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <label className="text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <label className="text-gray-700 font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <label className="text-gray-700 font-semibold">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>

          <button
            onClick={handleSignup}
            className="mt-4 bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Signup
          </button>
        </div>

        <div className="imagebox w-1/2">
          <img src={signupImg} alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
