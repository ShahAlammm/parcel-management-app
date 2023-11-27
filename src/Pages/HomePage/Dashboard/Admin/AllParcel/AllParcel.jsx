import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";

const AllParcel = () => {
  const axiosSecure = useAxiosSecure();
  const { data: books = [], refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings");
      return res.data;
    },
  });
  return (
    <div>
      <div>
        <SectionTitle heading={"MANAGE ALL USERS"}></SectionTitle>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Total User : {books.length}</h1>
      </div>
      <div className="overflow-x-auto rounded-xl">
        <table className="table ">
          {/* head */}
          <thead className="bg-[#26DEBE] uppercase text-gray-600">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Booking Date</th>
              <th>Requested Delivery Date</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Manage action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {books?.map((user, index) => (
              <tr key={user._id} className="font-semibold">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.bookingDate}</td>
                <td>{user.requestedDeliveryDate}</td>
                <td>{user.price}</td>
                <td>{user.status}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    Manage
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className="card h-96">



                        </div>
                      <from>
                        <div className="form-control space-y-3">
                          <label><span className="text-lg">Status :</span></label>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                          />
                        </div>
                        <button type="submit" className="btn text-xl btn-secondary mt-10">CONFIRM</button>
                      </from>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllParcel;
