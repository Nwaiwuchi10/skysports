import React from "react";
import Footer from "../../components/Footer/Footer";
import KnockPage from "../../components/KnockPage/KnockPage";
import LiveGame from "../../components/LiveGame/LiveGame";
import MoreFromClub from "../../components/MoreFromClub/MoreFromClub";
import MoreCards from "./morecards/MoreCards";

const HomePage = () => {
  return (
    <div>
      {/* <LiveGame /> */}
      <MoreCards />
      <KnockPage />
      <Footer />
    </div>
  );
};

export default HomePage;
