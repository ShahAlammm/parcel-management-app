import { NavLink, Outlet } from "react-router-dom";
import {
  FaChartPie,
  FaClipboardCheck,
  FaEnvelope,
  FaHome,
  FaListAlt,
  FaListUl,
  FaStar,
  FaUserAlt,
  FaUsers,
  FaWalking,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useDeliveryMan from "../hooks/useDeliveryMan";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const [isDeliveryMan] = useDeliveryMan();
  return (
    <div className="flex container m-auto">
      <div className="w-40 md:w-72 min-h-screen bg-[#26DEBE]">
        <h1 className="md:text-3xl mt-14 uppercase md:p-5 text-center text-black font-serif font-bold">
          Fast Parcel
        </h1>
        <ul className="menu md:text-lg font-serif uppercase md:mt-24">
          {isAdmin ? (
            <ul>
              <li className="text-black">
                <NavLink to="/dashboard/admin">
                  <FaChartPie className="md:w-7 md:h-10"></FaChartPie>Statistics
                </NavLink>
              </li>

              <li className="text-black">
                <NavLink to="/dashboard/allParcels">
                  <FaListUl className="md:w-7 md:h-10"></FaListUl>All Parcels
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/booking">
                  <FaWalking className="md:w-7 md:h-10"></FaWalking>All Delivery
                  Men
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/users">
                  <FaUsers className="md:w-7 md:h-10"></FaUsers>All Users
                </NavLink>
              </li>
            </ul>
          ) : isDeliveryMan ? (
            <ul>
              <li className="text-black">
                <NavLink to="/dashboard/booking">
                  <FaListUl className="md:w-7 md:h-10"></FaListUl>My Delivery List
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/booking">
                  <FaStar className="md:w-7 md:h-10"></FaStar>My Reviews
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="text-black">
                <NavLink to="/dashboard/profile">
                  <FaUserAlt className="md:w-7 md:h-10"></FaUserAlt>My Profile
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/bookings">
                  <FaListAlt className="md:w-7 md:h-10"></FaListAlt>Book a Parcel
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/myParcel">
                  <FaClipboardCheck className="md:w-7 md:h-10"></FaClipboardCheck>My Parcels
                </NavLink>
              </li>
            </ul>
          )}
        </ul>
        {/* Shard  */}
        <div className="divider divider-neutral"></div>
        <ul className="menu md:text-lg font-serif uppercase">
          <li className="text-black">
            <NavLink to="/">
              <FaHome className="md:w-7 md:h-10"></FaHome>Home
            </NavLink>
          </li>
          <li className="text-black">
            <NavLink to="/contact">
              <FaEnvelope className="md:w-7 md:h-10"></FaEnvelope>contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
