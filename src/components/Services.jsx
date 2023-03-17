import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section className="flex w-full justify-center flex-col items-center mt-28">
      <div className="w-full max-w-3xl h-28 rounded-sm border shadow-sm flex justify-center items-center bg-gray-200">
        <h2 className="text-4xl font-bold">Our Services</h2>
      </div>
      <ServicesCard />
    </section>
  );
};

export default Services;
