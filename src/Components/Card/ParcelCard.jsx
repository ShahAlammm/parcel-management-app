const ParcelCard = ({ item }) => {
  const { parcelType, requestedDeliveryDate, status, price } = item || {};

  return (
    <div>
      <div className="cart items-start bg-base-200">
        <div className="card-body">
          <div className="">
            <h1 className="text-xl font-bold">1. Parcel Type : {parcelType}</h1>
            <h1 className="text-xl font-bold">
              2. Requested Delivery Date : {requestedDeliveryDate}
            </h1>
            <h1 className="text-xl font-bold">
              3. Approximate Delivery Date :
            </h1>
            <h1 className="text-xl font-bold">
              4. BookingDate : {requestedDeliveryDate}
            </h1>
            <h1 className="text-xl font-bold">5. Delivery Men ID : </h1>
            <h1 className="text-xl font-bold">6. Booking Status : {status}</h1>
            <h1 className="text-xl font-bold">7. Price : {price}</h1>
          </div>
          <div className="space-x-10 md:space-x-60 my-5">
            <div className="join join-vertical lg:join-horizontal">
              {status === "pending" ? (
                <button className="btn bg-red-600 text-white join-item">
                  CANCEL
                </button>
              ) : (
                <button
                  disabled
                  className="btn bg-red-600 text-white join-item"
                >
                  CANCEL
                </button>
              )}
              {status === "pending" ? (
                <button className="btn bg-indigo-700 text-white join-item">
                  UPDATE
                </button>
              ) : (
                <button
                  disabled
                  className="btn bg-indigo-700 text-white join-item"
                >
                  UPDATE
                </button>
              )}
              <button className="btn join-item bg-green-400 text-white">
                REVIEW
              </button>
            </div>
          </div>
          <div className="divider divider-neutral"></div>
          <button className="btn bg-[#26DEBE] font-bold">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default ParcelCard;
