import rocket from "../assets/rocket.png";
import { NavLink, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <section className="flex h-screen w-full justify-center flex-col lg:flex-row lg:px-40 px-2 ">
      <div className="w-full flex justify-center flex-col lg:flex-row bg-[#0b8d9f] px-6 h-72 my-20 gap-6">
        <div className="sec1 flex flex-col max-w-sm items-center mt-6 gap-6 justify-center">
          <img
            src={rocket}
            className="h-20 w-auto object-cover animate-pulse"
          />
          <h4 className="text-xl">Don't Worry</h4>
          <p className="text-white max-w-[200px] text-center">
            Just enter the we've send you on your email
          </p>
        </div>
        <div className="sec flex flex-1 flex-col py-2 px-6 bg-white my-4 rounded-l-[10%] border-l border-t border-b-[20%]  border-gray-400  relative left-7 gap-6 items-center">
          <h4 className="text-2xl text-center">Enter Verification Code</h4>

          <div className="flex flex-col items-center max-w-sm ">
            <div className="flex flex-row justify-center">
              <input
                type="text"
                placeholder=""
                className="outline-none border w-8 p-1 text-center"
              />
              <input
                type="text"
                placeholder=""
                className="outline-none border w-8 p-1 text-center"
              />
              <input
                type="text"
                placeholder=""
                className="outline-none border w-8 p-1 text-center"
              />
              <input
                type="text"
                placeholder=""
                className="outline-none border w-8 p-1 text-center"
              />
            </div>
            <div className="relative max-w-sm flex px-4 justify-end">
              <button
                className="px-1 mt-4 py-1 relative  w-24 rounded-md bg-black text-white border-none"
                onClick={() => {
                  navigate("/change-password");
                }}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
