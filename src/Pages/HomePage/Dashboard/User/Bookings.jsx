import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import ParcelForm from "./ParcelForm";

const Bookings = () => {
  return (
    <div>
      <SectionTitle heading={"My Booking"}></SectionTitle>
      <div>
        <ParcelForm></ParcelForm>
      </div>
    </div>
  );
};

export default Bookings;
