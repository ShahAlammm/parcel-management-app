// Import necessary dependencies
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useBookings = () => {

  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure();
const {user} = useAuth()
  // Use useQuery hook to fetch data
  const { refetch, data: bookings = [] } = useQuery({
    queryKey: ["bookings", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
      return res.data;
    },
  });

  // Return the necessary data and functions
  return { bookings, refetch };
};

export default useBookings;
