import img1 from "../assets/img1.jpg";

const Card = () => {
  return (
    <section className="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white">
      <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <img src={img1} className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 hidden w-full h-full bg-gray-100 overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h1 className="text-3xl font-semibold">The King's Man</h1>
              <p className="my-2">9.0 Rating</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
              <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
