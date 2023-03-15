import Loader from "./Loader";

const SliderSkeleton = () => {
  return (
    <section className="w-full h-96 bg-gray-400 animate-pulse flex justify-center items-center flex-col gap-4">
      <div className="w-[500px] h-3 bg-gray-300 rounded-md animate-pulse"></div>
      <div className="w-96 h-2 bg-gray-300 rounded-md animate-pulse"></div>
      <Loader />
    </section>
  );
};

export default SliderSkeleton;
// This component will be responsible fo holding the animation untill the slider loads properly.
