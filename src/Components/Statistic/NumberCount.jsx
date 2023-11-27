import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

import CountUp from "react-countup";
import SectionTitle from "../SectionTitle/SectionTitle";

const NumberCount = () => {
  const axiosSecure = useAxiosSecure();

  const { data: appStats = {} } = useQuery({
    queryKey: ["app-statistics"],
    queryFn: async () => {
      const res = await axiosSecure.get("/app-statistics");
      return res.data;
    },
  });

  return (
    <div className="my-24">
      <div
        style={{ backgroundImage: `url(https://i.ibb.co/265fpgL/nnn.jpg)` }}
        className="hero min-h-[700px] bg-fixed"
      >
        <div className="hero-overlay bg-opacity-0 "></div>
          <div className="hero-content flex-col lg:flex-row-reverse container m-auto ">
            <div className=" w-1/2  ">
              <img
                src="https://i.ibb.co/Xx80npq/delivery-man-running-fast-removebg-preview.png"
                className=""
              />
            </div>
            <div className="card shrink-0 w-1/2  shadow-2xl bg-base-200">
              <div className="card-body">
                <div className="stats stats-vertical lg:stats-horizontal shadow-xl">
                  <div className="stat">
                    <div className="stat-title">Parcel Booking</div>
                    <div className="stat-value">
                      <CountUp
                        duration={10}
                        className="stat-value counter text-secondary"
                        start={1000}
                        end={appStats.bookedParcels}
                      ></CountUp>
                      K
                    </div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                  </div>

                  <div className="stat">
                    <div className="stat-title">Delivered Parcels</div>
                    <div className="stat-value">
                      <CountUp
                        duration={10}
                        className="stat-value counter text-secondary"
                        start={1000}
                        end={appStats.deliveredParcels}
                      ></CountUp>
                      K
                    </div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                  </div>

                  <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">
                      <CountUp
                        duration={10}
                        className="stat-value counter text-secondary"
                        start={1000}
                        end={appStats.registeredUsers}
                      ></CountUp>
                      K
                    </div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default NumberCount;
