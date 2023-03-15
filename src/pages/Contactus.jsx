const Contactus = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse flex-wrap justify-center  px-3 w-full  gap-4 items-center h-screen">
      <div className="first-section flex flex-col gap-10 max-w-md relative  pr-3 items-center">
        <h1 className="text-[#0b8d9f] text-3xl italic">
          Don't Be Shy, Talk to Us.
        </h1>
        <h4 className="text-md text-gray-400 text-center px-12 lg:px-1">
          Here is a few approaches to get in touch with me, It would be ideal if
          you send an email, fill the contact form.{" "}
          <span className="font-bold text-black">
            We are looking forward to speacking with you.
          </span>
        </h4>
      </div>
      <div className="second-section border w-[320px] max-w-sm shadow-md rounded-md h-auto py-2  flex flex-col gap-4 px-4 pb-6">
        <h2 className="text-center font-semibold">Contact Me</h2>
        <input
          type="text"
          placeholder="Name"
          className="border-b focus:outline-none outline-none py-1"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-b focus:outline-none outline-none py-1"
        />
        <input
          type="phone"
          placeholder="Phone"
          className="border-b focus:outline-none outline-none py-1"
        />
        <select className="border-b outline-none text-gray-400">
          <option disabled selected>
            What are you getting in touch with?
          </option>
          <option>Account</option>
          <option>Courses</option>
          <option>Assignemnt</option>
        </select>
        <textarea
          placeholder="Message"
          className="border-b outline-none"
        ></textarea>
        <button className="px-1 border-none bg-black text-white font-bold p-1 rounded-md py-2 w-32 mx-auto">
          Send Message
        </button>
      </div>
    </section>
  );
};

export default Contactus;
