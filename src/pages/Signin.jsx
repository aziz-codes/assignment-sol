import rocket from "../assets/rocket.png";
import { NavLink, useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    alert(
      "We have sent you a verification link to your eamil address, please verify the link and redirect."
    );
    navigate("/");
  };
  return (
    <section className="flex h-screen w-full justify-center flex-col lg:flex-row lg:px-40 px-2 ">
      <div className="w-full flex justify-center flex-col lg:flex-row bg-[#0b8d9f] px-6 h-96 my-20 gap-6">
        <div className="sec1 flex flex-col max-w-sm items-center mt-6 gap-6">
          <img
            src={rocket}
            className="h-20 w-auto object-cover animate-pulse"
          />
          <h4 className="text-xl">Haven't Register Yet</h4>
          <p className="text-white max-w-[200px] text-center">
            It will take a few seconds, register yourself and enjoy our service
          </p>

          <button
            className="bg-black text-white font-semibold px-1 w-28 py-2 rounded-md"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </button>
        </div>
        <div className="sec flex flex-1 flex-col py-10 px-6 bg-white my-4 rounded-l-[10%] border-l border-t border-b-[20%]  border-gray-400  relative left-7 gap-6">
          <h4 className="text-2xl text-center">Signin</h4>

          <div className="flex flex-col gap-6 px-6 ">
            <input
              type="text"
              placeholder="Last Name"
              className="outline-none border-b p-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="outline-none border-b p-2"
            />
            <div className="relative max-w-sm flex px-4 justify-between">
              <NavLink to="/forgot-password" className="hover:text-[#0b8d9f]">
                Forgot password?
              </NavLink>
              <button
                className="px-1 mt-4 py-1 relative left-48 w-24 rounded-md bg-black text-white border-none"
                onClick={() => {
                  navigate("/");
                }}
              >
                Signin
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
