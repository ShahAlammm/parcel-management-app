import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import ParcelCard from "../../../../Components/Card/ParcelCard";

const MyParcel = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
  const { data: items = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
      return res.data;
    },
  });
  console.log()
  return (
    <div>
      <SectionTitle heading={"My Bookings"}></SectionTitle>
      <div className=" grid xl:grid-cols-2 gap-5">
        {items.map((item) => (
         <ParcelCard key={item._id} item={item}></ParcelCard>
        ))}
      </div>
    </div>
  );
};

export default MyParcel;
