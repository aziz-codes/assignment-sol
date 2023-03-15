import AssignmenSamples from "../components/AssignmenSamples";
import Banner from "../components/Banner";
import Card from "../components/Card";
import SliderSkeleton from "../layouts/SliderSkeleton";
import { lazy, Suspense } from "react";

const Home = () => {
  const Slider = lazy(() => import("../components/Slider"));
  return (
    <>
      <Suspense fallback={<SliderSkeleton />}>
        <Slider />
      </Suspense>
      <Card />
      <Banner />
      <AssignmenSamples />
    </>
  );
};

export default Home;
// Home Page done with this commit
