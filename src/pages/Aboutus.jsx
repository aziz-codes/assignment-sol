import phone from "../assets/phone2.png";

const Aboutus = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center mt-7 gap-6 pb-10">
      <h4 className="font-bold text-2xl">Why it it so great?</h4>
      <h4 className="text-center px-2 mx-2 lg:px-20 lg:mx-32 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit velit,
        exercitationem tempora ab odio expedita ratione
      </h4>
      <div className="w-full flex lg:px-12 px-6 mt-4">
        <div className="section1 flex flex-col gap-5 flex-1">
          <div>
            <h4 className="font-semibold">International</h4>
            <label className="text-xs text-gray-500 leading-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis
              animi perferendis, quae explicabo velit
            </label>
          </div>
          <div>
            <h4 className="font-semibold">Experimental</h4>
            <label className="text-xs text-gray-500 leading-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis
              animi perferendis, quae explicabo velit
            </label>
          </div>
          <div>
            <h4 className="font-semibold">Relaxing</h4>
            <label className="text-xs text-gray-500 leading-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis
              animi perferendis, quae explicabo velit
            </label>
          </div>
        </div>
        <div className="section2 flex-1 flex justify-center">
          <img src={phone} alt="phone" className="object-cover p-0   w-auto" />
        </div>
        <div className="section3 flex flex-col flex-1 gap-5">
          <div>
            <h4 className="font-semibold">Beloved</h4>
            <label className="text-xs text-gray-500 leading-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis
              animi perferendis, quae explicabo velit
            </label>
          </div>
          <div>
            <h4 className="font-semibold">Rapaid</h4>
            <label className="text-xs text-gray-500 leading-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis
              animi perferendis, quae explicabo velit
            </label>
          </div>
          <div>
            <h4 className="font-semibold">Magical</h4>
            <label className="text-xs text-gray-500 leading-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis
              animi perferendis, quae explicabo velit
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
