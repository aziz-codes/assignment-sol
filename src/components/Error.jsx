import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-screen justify-center items-center flex-col gap-3">
      <h4 className="text-9xl font-bold">
        4<span className="text-[#0b8d9f]">0</span>4
      </h4>
      <h4>This page does not exist !</h4>
      <button
        className="px-1 py-1 w-36 bg-[#0b8d9f] text-white rounded-sm border-none"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Error;
