import pc from "../assets/pc.jpeg";
import { useNavigate } from "react-router-dom";
const GenerateAssignment = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center flex-col items-center gap-5 pb-44 my-10">
      <img src={pc} className="object-cover h-40 w-40" />
      <input
        type="text"
        placeholder="Enter your question"
        className="outline-none border w-[400px] p-2 rounded-md"
      />
      <div className="flex flex-row gap-6">
        <button
          className="bg-black w-28 py-1 text-center  rounded-md text-white"
          onClick={() => {
            navigate("/select-course");
          }}
        >
          Back
        </button>
        <button
          className="bg-[#0b8d9f] w-auto px-1 py-1 text-center  rounded-md text-white"
          onClick={() => {
            navigate("/");
          }}
        >
          Generate Assignment
        </button>
      </div>
    </section>
  );
};

export default GenerateAssignment;
