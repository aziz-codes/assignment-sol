import at1 from "../assets/at1.jpeg";
import at2 from "../assets/at2.png";
import at4 from "../assets/at4.png";
import at3 from "../assets/at3.jpeg";
const AssignmenSamples = () => {
  const images = [at1, at2, at3, at4];

  return (
    <section className="flex justify-center flex-col items-center py-4 h-96 mt-5">
      <h4 className="text-black text-3xl font-semibold pb-4">
        Assignment Samples
      </h4>
      <div className="px-2 my-4 w-3/4 flex flex-row gap-3 justify-center lg:justify-between flex-wrap">
        {images.map((image, index) => (
          <img
            src={image}
            className="h-56 w-44 object-cover border"
            key={index}
            alt="assignments"
          />
        ))}
      </div>
    </section>
  );
};

export default AssignmenSamples;
