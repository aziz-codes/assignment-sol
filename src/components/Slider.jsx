import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
const Slider = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [sliderData, setData] = useState([
    {
      img: img2,
      title: "Do you feel difficulty in gathering content for an assignment",
      desc: "get your assignments done with assignmentsol",
    },
    {
      img: img1,
      title: "Complete your assignments by assignmentsol experts",
      desc: "Use assignmensol to get computer science assignments",
    },

    {
      img: img3,
      title: "Need help, regarding your assignment",
      desc: "we are here to help you!",
    },
  ]);
  const navBtn = ["img1", "img2", "img3"];
  const handlePrevious = () => {
    if (index === 0) {
      return;
    } else {
      setIndex((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (index === sliderData.length - 1) {
      return;
    }
    setIndex((prev) => prev + 1);
  };
  return (
    <div className="w-full relative left-0 top-0">
      <div
        className="relative bg-cover bg-center bg-no-repeat h-96 w-full flex justify-around items-center"
        style={{ backgroundImage: `url(${sliderData[index].img})` }}
      >
        <ChevronLeftIcon
          className="h-8  w-8  text-white cursor-pointer"
          onClick={handlePrevious}
        />
        <div className="flex flex-col justify-center gap-4 items-center">
          <p className="text-white text-4xl font-extrabold max-w-3xl text-center shadow-md bg-opacity-60">
            {sliderData[index].title}
          </p>
          <p className="text-white text-center font-bold">
            {sliderData[index].desc}
          </p>
          <button
            className="rounded-sm px-1 py-2 font-bold bg-[#0b8d9f]  mt-4 text-white w-28"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Register Now
          </button>
        </div>
        <ChevronRightIcon
          className="h-8  w-8  text-white cursor-pointer"
          onClick={handleNext}
        />
      </div>
      <div className="absolute bottom-2 flex justify-center w-full gap-2">
        {navBtn.map((item, i) => (
          <div
            className={`h-1 w-8 ${index === i ? "bg-white" : "bg-gray-400"}`}
            key={item}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
