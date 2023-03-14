import book from "../assets/book.png";
import { useNavigate } from "react-router-dom";
const GenerateAssignment = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center flex-col items-center gap-5 pb-44">
      <img src={book} className="object-cover h-44 w-44" />
      <select className="border p-2  w-[400px]">
        <option selected disabled>
          Select Course
        </option>
        <option>Software Engineering</option>
        <option>Software Quality Engineering</option>
        <option>Principle of Information Technology</option>
        <option>Introduction To Computing </option>
        <option>Software Testing</option>
        <option>Database Systsem</option>
        <option>Operating System</option>
      </select>
      <button
        className="bg-black w-28 py-1 text-center  rounded-md text-white"
        onClick={() => {
          navigate("/select-template");
        }}
      >
        Next
      </button>
    </section>
  );
};

export default GenerateAssignment;
