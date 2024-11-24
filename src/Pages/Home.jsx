import React from "react";
import {
  DownDisplayPage,
  HeroPage,
  LearnPage,
  DownPage,
  DetailsPage,
  HelpPage,
  ReviewPage,
  DemoPage,
} from "../Components";

const Home = () => {
  return (
    <div>
      <HeroPage />
      <DownPage />
      <LearnPage />
      <DetailsPage />
      <HelpPage />
      <ReviewPage />
      <DownDisplayPage />
      <DemoPage />
    </div>
  );
};

export default Home;
