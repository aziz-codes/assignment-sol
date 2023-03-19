import { useState } from "react";
import pc from "../assets/pc.jpeg";
import axios from "axios";
const GenerateAssignment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    const API_KEY = "AIzaSyA-FuW-FifYEl1V04jU757_SpGlnghn3-Y";
    const SEARCH_ENGINE_ID = "97639ebc141614b17";
    const URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${searchTerm}`;

    try {
      const response = await axios.get(URL);
      setSearchResults(response.data.items);
      setLoading(false);
      console.log(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    if (e.length > 3) {
      setHasError(false);
    } else {
      setHasError(true);
      setError("Query must be more than 10 charecters");
    }
  };

  return (
    <section className="flex w-full flex-col gap-6 my-6 items-center h-auto overflow-y-auto pb-20">
      <div className="flex gap-1 items-center">
        <img
          src={pc}
          alt="pc"
          className="h-28 w-28 object-cover rounded-full"
        />
        <h4>Generate Assignment</h4>
      </div>
      <div className="flex w-full gap-6 px-12">
        <div>
          <select className="border w-56 p-0 rounded-sm">
            <option>Easy</option>
            <option>Medium</option>
            <option>Complex</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex-1 w-full ">
          <input
            type="text"
            placeholder="e.g what is software testing?"
            className={`outline-none border  rounded-sm px-1 w-full ${
              hasError ? "border-red-500" : ""
            }`}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
          {hasError && <p className="text-xs text-red-500">{error}</p>}
        </div>
        <div>
          <button
            className={`flex items-center px-3 py-0.5  rounded-sm border-none ${
              hasError ? "bg-gray-300 text-gray-500" : "bg-[#0b8d9f] text-white"
            }`}
            onClick={handleSubmit}
            disabled={hasError}
          >
            {loading && (
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            )}
            Generate Assignment
          </button>
        </div>
      </div>
      <div className="h-auto  w-[896px] max-w-4xl my-4 border p-2 px-4 result flex flex-col gap-4">
        <h4 className="font-bold">Introduction</h4>
        <div className="h-auto ">
          {loading ? (
            <div className="h-2 w-96 bg-gray-300 animate-pulse rounded-sm"></div>
          ) : (
            searchResults.map((result) => (
              <div key={result.link}>
                {loading ? (
                  <div className="h-1 w-96 animate-pulse bg-gray-300 rounded-sm"></div>
                ) : (
                  <p>{result.snippet}</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button className="text-sm px-2  border-none font-semibold text-white bg-[#0b8d9f] py-1 ">
          Download as Word
        </button>
        <button className="text-sm px-2  border-none font-semibold text-white bg-[#0b8d9f] py-1 ">
          Preview and Download as PDF
        </button>
      </div>
    </section>
  );
};
export default GenerateAssignment;
