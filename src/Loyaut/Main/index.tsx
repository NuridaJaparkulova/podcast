import PodcastSubscribe from "../../components/PodcastSubscribe";
import PodcastSwiper from "../../components/PodcastSwiper";
import AboutComponent from "../../components/About";
import Listeners from "../../components/Listeners";
import Membership from "../../components/Membership";
import Episodes from "../../components/Episodes";

const Main = () => {
  return (
    <div>
      <PodcastSubscribe />
      <PodcastSwiper />
      <AboutComponent />
      <Listeners />
      <Membership />
      <Episodes />
    </div>
  );
};

export default Main;
