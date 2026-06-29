import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center bg-[#657e79] p-[20px] mt-[50px]">
      <div className="flex justify-center p-[20px] gap-10">
        <a href="https://in.linkedin.com/in/bhanuprakashpindi">
          <img
            className="w-[40px] transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125 hover:drop-shadow"
            src="https://cdn-icons-png.flaticon.com/128/1384/1384088.png"
            alt="linkedin"
          />
        </a>
        <a href="https://github.com/bhanuprakashpindi-creator">
          <img
            className="w-[40px] transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125 hover:drop-shadow"
            src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png"
            alt="github"
          />
        </a>
      </div>
      <div className="flex gap-15 justify-center">
        <h3 className="cursor-pointer hover:underline hover:decoration-red-500 font-medium">
          <Link to="/about">AboutMe</Link>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
