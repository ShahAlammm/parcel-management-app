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
            <h2 className="card-title font-bold text-4xl">
              Super Fast Delivery
            </h2>
            <p className="text-lg">
              Experience lightning-fast parcel deliveries with our Super Fast
              Delivery service at Fast Parcel. Our cutting-edge logistics
              technology ensures swift and reliable shipments, offering express
              options like same-day and overnight services. Our dedicated team
              of experienced couriers prioritizes speed without compromising on
              parcel safety. At Fast Parcel, we are committed to providing a
              stress-free and expedited shipping experience, making us your
              trusted partner for urgent deliveries. Choose excellence, choose
              Super Fast Delivery with Fast Parcel.
            </p>
            <div className="divider divider-neutral"></div>
          </div>
        </div>
        <div className="card">
          <figure>
            <Lottie animationData={safety}></Lottie>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-4xl">Parcel Safety</h2>
            <p className="text-lg">
              Ensuring the safety of your parcels is our paramount concern at
              Fast Parcel. We employ secure packaging techniques, using
              high-quality materials to minimize the risk of damage during
              transit. Real-time tracking keeps you informed about your parcel's
              journey, offering transparency and reassurance. Our experienced
              staff handles each parcel with precision and care, and for
              additional peace of mind, we provide insurance options to cover
              the value of your shipments. Trust Fast Parcel for a heightened
              standard of parcel safety, delivering not only packages but also
              confidence in reliable and secure parcel services.
            </p>
            <div className="divider divider-neutral"></div>
          </div>
        </div>
        <div className="card">
          <figure>
            <Lottie animationData={author}></Lottie>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-4xl">Verify Author</h2>
            <p className="text-lg">
              To ensure secure access and protect sensitive information, we
              prioritize robust authentication and authorization measures at
              Fast Parcel. Our authentication protocols verify the
              identity of users, employing multi-factor authentication for an
              added layer of security. Authorization mechanisms control and
              grant appropriate access levels, safeguarding confidential data.
              Regular audits and monitoring further fortify our commitment to
              verifying and maintaining authorization integrity. Trust us to
              prioritize the authentication and authorization.

            </p>
            <div className="divider divider-neutral"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
