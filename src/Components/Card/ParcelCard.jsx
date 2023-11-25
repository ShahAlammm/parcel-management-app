const ParcelCard = ({ item }) => {
  const { parcelType, requestedDeliveryDate } = item || {};
  return (
    <div>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{parcelType}</h2>
          <p>{requestedDeliveryDate}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelCard;
