import book from "../assets/book.png";
import { useNavigate } from "react-router-dom";

const AssignmentTemplate = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center flex-col items-center gap-5 pb-44">
      <img src={book} className="object-cover h-44 w-44" />
      <select className="border p-2 max-w-sm w-[400px]">
        <option selected disabled>
          Select Your Template
        </option>
        <option>Easy Template</option>
        <option>Medium Template</option>
        <option>Complex Template</option>
        <option>Blank Template</option>
      </select>
      <div className="flex flex-row gap-6">
        <button
          className="bg-black w-28 py-1 text-center  rounded-md text-white"
          onClick={() => {
            navigate("/select-course");
          }}
        >
          Previous
        </button>
        <button
          className="bg-black w-28 py-1 text-center  rounded-md text-white"
          onClick={() => {
            navigate("/select-template");
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default AssignmentTemplate;
