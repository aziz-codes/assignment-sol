import ProgressBar from "./ProgressBar";

const MileStone = () => {
  return (
    <section className="flex w-full justify-center flex-col items-center mt-28 gap-16">
      <h4 className="text-4xl font-bold">Milestone Achieved</h4>
      <div className="w-full  flex flex-row justify-center gap-24">
        <ProgressBar />
      </div>
    </section>
  );
};

export default MileStone;
