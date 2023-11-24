import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Lottie from "lottie-react";
import fast from "../../../assets/fast-delivery.json";
import safety from "../../../assets/safely.json";
import author from "../../../assets/authorise.json";
const FeaturesSection = () => {
  return (
    <div className="container m-auto">
      <SectionTitle heading={"our features"}></SectionTitle>
      <div className="md:flex gap-20 justify-center items-center">
        <div className="card text-center">
          <div className="rounded-full w-96">
            <Lottie animationData={fast}></Lottie>
          </div>
          <h2 className="text-3xl font-extrabold">Super Fast Delivery</h2>
          <p className="max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            recusandae repellat debitis
          </p>
        </div>
        <div className="card text-center">
          <div className="rounded-full  w-96">
            <Lottie animationData={safety}></Lottie>
          </div>
          <h2 className="text-3xl font-extrabold">Parcel Safety</h2>
          <p className="max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            recusandae repellat debitis commodi
          </p>
        </div>
        <div className="card text-center">
          <div className="rounded-full w-96">
            <Lottie animationData={author}></Lottie>
          </div>
          <h2 className="text-3xl font-extrabold">Verify Author</h2>
          <p className="max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            recusandae repellat debitis commodi
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
