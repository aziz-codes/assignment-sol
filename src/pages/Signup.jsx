import rocket from "../assets/rocket.png";
import { useNavigate } from "react-router-dom";
const Signup = () => {
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
          <h4 className="text-xl">Welcome</h4>
          <p className="text-white max-w-[200px] text-center">
            You are just thirty seconds away from getting your assignment
          </p>

          <button
            className="bg-black text-white font-semibold px-1 w-28 py-2 rounded-md"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Login
          </button>
        </div>
        <div className="sec flex flex-1 flex-col py-10 px-6 bg-white my-4 rounded-l-[10%] border-l border-t border-b-[20%]  border-gray-400  relative left-7 ">
          <h4 className="text-2xl text-center">Signup</h4>
          <div className="flex flex-row  gap-4 mt-7">
            <div className="flex flex-col flex-1 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="outline-none border-b p-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="outline-none border-b p-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="outline-none border-b p-2"
              />
            </div>
            <div className="flex flex-col flex-1 gap-4 px-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="outline-none border-b p-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="outline-none border-b p-2"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="outline-none border-b p-2"
              />
              <button
                className="px-1 mt-4 py-1 relative left-48 w-24 rounded-md bg-black text-white border-none"
                onClick={handleSignup}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
