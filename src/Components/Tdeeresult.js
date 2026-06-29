const Tdeeresult=({bmi,tdee,onClose})=>{
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-2xl max-w-sm w-full text-center">
                <h2 className="text-2xl font-bold mb-4">Your Results</h2>
                <p>BMI: <span className="font-semibold">{bmi}</span></p>
                <p>TDEE: <span className="font-semibold">{tdee} Calories/day</span></p>
                <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default Tdeeresult;