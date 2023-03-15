import rocket from "../assets/rocket.png";
import { NavLink, useNavigate } from "react-router-dom";
const ChangePassword = () => {
  const navigate = useNavigate();
  const handleRecover = () => {
    alert(
      "Your password has beenc changes, you can now login into your account by using your new password"
    );
  };
  return (
    <section className="flex h-screen w-full justify-center flex-col lg:flex-row lg:px-40 px-2 ">
      <div className="w-full flex justify-center flex-col lg:flex-row bg-[#0b8d9f] px-6 h-96 my-20 gap-6">
        <div className="sec1 flex flex-col max-w-sm items-center mt-6 gap-6">
          <img
            src={rocket}
            className="h-20 w-auto object-cover animate-pulse"
          />
          <h4 className="text-xl">Congratulation</h4>
          <p className="text-white max-w-[200px] text-center">
            Your worries ends here, change your password and login again
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
        <div className="sec flex flex-1 flex-col py-10 px-6 bg-white my-4 rounded-l-[10%] border-l border-t border-b-[20%]  border-gray-400  relative left-7 gap-6">
          <h4 className="text-2xl text-center">Change Password</h4>

          <div className="flex flex-col gap-6 px-6 w-full ">
            <input
              type="password"
              placeholder="New Password"
              className="outline-none border-b p-2 w-full"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="outline-none border-b p-2"
            />

            <button
              className="px-1 mt-1 ml-auto py-1 relative left-10 w-28 rounded-md bg-black text-white border-none"
              onClick={handleRecover}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
