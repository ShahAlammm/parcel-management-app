import Lottie from "lottie-react";
import shift from "../../assets/shift.json";

const SectionTitle = ({ heading }) => {
  return (
    <div className="mb-10 md:w-4/12 text-center mx-auto">
      <p className="text-lg m-2">
        <span className="italic font-serif">
          <Lottie animationData={shift}></Lottie>
        </span>
      </p>
      <progress className="progress progress-accent w-72"></progress>
      <h3 className="text-3xl uppercase font-serif font-semibold py-4">
        {heading}
      </h3>
      <progress className="progress progress-accent w-72"></progress>
    </div>
  );
};

export default SectionTitle;
