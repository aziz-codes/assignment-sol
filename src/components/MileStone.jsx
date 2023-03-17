import ProgressBar from "./ProgressBar";

const MileStone = () => {
  return (
    <section className="flex w-full justify-center flex-col items-center mt-28">
      <h4 className="text-4xl font-bold">Milestone Achieved</h4>
      <div className="max-w-3xl flex flex-row gap-4">
        <ProgressBar />
      </div>
    </section>
  );
};

export default MileStone;
