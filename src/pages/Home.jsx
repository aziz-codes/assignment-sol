import AssignmenSamples from "../components/AssignmenSamples";
import Banner from "../components/Banner";
// import Card from "../components/Card";
import Services from "../components/Services";
import SliderSkeleton from "../layouts/SliderSkeleton";
import MileStone from "../components/MileStone";
import { lazy, Suspense } from "react";

const Home = () => {
  const Slider = lazy(() => import("../components/Slider"));
  return (
    <>
      <Suspense fallback={<SliderSkeleton />}>
        <Slider />
      </Suspense>
      <Services />
      <MileStone />
      <Banner />
      <AssignmenSamples />
    </>
  );
};

export default Home;
// Home Page done with this commit
