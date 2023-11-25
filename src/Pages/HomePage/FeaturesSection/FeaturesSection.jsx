import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Lottie from "lottie-react";
import fast from "../../../assets/fast-delivery.json";
import safety from "../../../assets/safely.json";
import author from "../../../assets/authorise.json";
const FeaturesSection = () => {
  return (
    <div className="container m-auto ">
      <SectionTitle heading={"our features"}></SectionTitle>
      <div className="grid  items-center  justify-center gap-5 lg:grid-cols-3">
        <div className="card">
          <figure>
            <Lottie animationData={fast}></Lottie>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-4xl">Super Fast Delivery</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card">
          <figure>
            <Lottie animationData={safety}></Lottie>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-4xl">Parcel Safety</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card">
          <figure>
            <Lottie animationData={author}></Lottie>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-4xl">Verify Author</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
