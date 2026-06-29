const myImg = new URL("../../images/myImg.png", import.meta.url).toString();

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-sm w-full flex flex-col items-center text-center">
        <img
          src={myImg}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-gray-200"
        />

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Pindi Bhanu Prakash
        </h1>

        <p className="text-gray-500 mb-6 text-sm">
          MERN Stack Developer | React | Redux | Tailwind CSS | Java | DSA
        </p>

        <div className="space-y-4 w-full">
          <a
            href="mailto:bhanuprakashpindi1@gmail.com"
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-blue-50 transition-colors">
            <span className="font-semibold text-gray-700 w-20 text-left">
              Email:
            </span>
            <span className="text-blue-600 break-words text-[15px]">
              bhanuprakashpindi1@gmail.com
            </span>
          </a>

          <a
            href="https://github.com/bhanuprakashpindi-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
            <span className="font-semibold text-gray-700 w-20 text-left">
              GitHub:
            </span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png"
              alt="github"
              className="w-6 h-6 hover:scale-125 transition-transform"
            />
          </a>

          <a
            href="https://in.linkedin.com/in/bhanuprakashpindi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-blue-50 transition-colors">
            <span className="font-semibold text-gray-700 w-20 text-left">
              LinkedIn:
            </span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384088.png"
              alt="linkedin"
              className="w-6 h-6 hover:scale-125 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
