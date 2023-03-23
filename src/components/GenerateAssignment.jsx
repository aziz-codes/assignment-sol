import { useState, useRef } from "react";
import pc from "../assets/pc.jpeg";
import axios from "axios";
import { saveAs } from "file-saver";
import TemplateProSkeleton from "../layouts/TemplateProSkeleton";
const GenerateAssignment = () => {
  const resultRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading2, setLoading2] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [option, setOptions] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setImages([]);
    const API_KEY = "AIzaSyA-FuW-FifYEl1V04jU757_SpGlnghn3-Y";
    const SEARCH_ENGINE_ID = "97639ebc141614b17";
    const URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${searchTerm}`;

    try {
      const response = await axios.get(URL);
      setSearchResults(response.data.items);
      if (option === "Complex" || option === "Medium") {
        // getImages();
        searchImages(searchTerm);
        console.log(response.data.items);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // const getImages = async () => {
  //   setLoading2(true);
  //   const accessKey = "cHY6kjI9g-yMFmbzDipPwdd0SLzbt4oFuOHNY5o2z14";
  //   const url = `https://api.unsplash.com/search/photos/?query=${searchTerm}&client_id=${accessKey}&per_page=1`;
  //   const res = await axios.get(url);
  //   setLoading2(false);
  //   setImages(res.data.results[0].urls.regular);
  // };
  const handleChange = (e) => {
    setSearchTerm(e);
    if (e.length > 3) {
      setHasError(false);
    } else {
      setHasError(true);
      setError("Query must be more than 10 charecters");
    }
  };
  const handleDownload = () => {
    const text = document.getElementById("result").textContent;
    const blob = new Blob([text], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    saveAs(blob, "document.docx");
  };
  const handlePrint = () => {
    var divContents = document.getElementById("result").innerHTML;
    var printWindow = window.open("", "", "height=900,width=1000");
    printWindow.document.write("<html><head><title>Print Assignment</title>");
    printWindow.document.write("</head><body >");
    printWindow.document.write(divContents);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };
  const searchImages = async (searchTerm) => {
    const apiKey = "AIzaSyA-FuW-FifYEl1V04jU757_SpGlnghn3-Y";
    const SEARCH_ENGINE_ID = "97639ebc141614b17";
    const searchUrl = `https://www.googleapis.com/customsearch/v1?q=${searchTerm}&cx=${SEARCH_ENGINE_ID}&imgSize=large&imgType=photo&num=3&searchType=image&key=${apiKey}`;

    return await axios
      .get(searchUrl)
      .then((response) => {
        const images = response.data.items.map((item) => item.link);
        setImages(images[0]);
      })
      .catch((error) => {
        console.log(error);
      });
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
          <select
            className="border w-56 p-0 rounded-sm outline-none"
            onChange={(e) => {
              setOptions(e.target.value);
            }}
          >
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
              hasError || loading
                ? "bg-gray-300 text-gray-500"
                : "bg-[#0b8d9f] text-white"
            }`}
            onClick={handleSubmit}
            disabled={hasError || loading}
          >
            {loading && (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-white animate-spin"
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
      <div
        className="h-auto  w-[896px] max-w-4xl my-4 border p-2 px-4 result flex flex-col gap-4"
        id="result"
        ref={resultRef}
      >
        <h4 className="font-bold">Introduction</h4>
        <div className="h-auto ">
          {loading || searchResults.length === 0 ? (
            <div className="h-2 w-96 bg-gray-300 animate-pulse rounded-sm"></div>
          ) : (
            searchResults.slice(2).map((result) => (
              <div key={result.link}>
                {loading ? (
                  <div className="h-1 w-96 animate-pulse bg-gray-300 rounded-sm"></div>
                ) : (
                  <div>
                    <p>{result.snippet}</p>
                  </div>
                )}
              </div>
            ))
          )}
          {option === "Complex" || option === "Medium" ? (
            <div>
              {loading2 ? (
                <TemplateProSkeleton />
              ) : (
                <div className="flex flex-col mt-4 gap-2">
                  <h4 className="font-semibold">Diagram</h4>
                  {images.length > 0 ? (
                    <img
                      src={images}
                      alt="source"
                      className="h-44 w-44 object-cover"
                    />
                  ) : (
                    <div className="h-44 w-44 bg-gray-300 animate-pulse"></div>
                  )}
                  <h4 className="font-semibold">Example</h4>
                  {searchResults.length > 0 ? (
                    <label>
                      {searchResults[0]?.snippet +
                        " " +
                        searchResults[2]?.snippet}
                    </label>
                  ) : (
                    <div className="h-1 w-full bg-gray-300 animate-pulse "></div>
                  )}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="text-sm px-2  border-none font-semibold text-white bg-[#0b8d9f] py-1 "
          onClick={handleDownload}
        >
          Download as Word
        </button>
        <button
          className="text-sm px-2  border-none font-semibold text-white bg-[#0b8d9f] py-1 "
          onClick={handlePrint}
        >
          Preview and Download as PDF
        </button>
      </div>
    </section>
  );
};
export default GenerateAssignment;
