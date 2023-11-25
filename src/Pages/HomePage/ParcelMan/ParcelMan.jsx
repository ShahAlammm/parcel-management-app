import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Card from "../../../Components/Card/Card";

const ParcelMan = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: async () => {
      const res = await axiosPublic.get("/deliveryMan");
      return res.data;
    },
  });
  return (
    <>
      <div
        style={{
          backgroundImage: "url('https://i.ibb.co/f9FDs29/bn.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-fixed text-white"
      >
        <div className="bg-white bg-opacity-30 pt-2">
          <div className="container m-auto">
            <SectionTitle heading={"Delivery Man"}></SectionTitle>
          </div>
          <div className="container m-auto pb-20 pt-12 md:px-36 px-10 gap-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
              {menu.map((item) => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParcelMan;
