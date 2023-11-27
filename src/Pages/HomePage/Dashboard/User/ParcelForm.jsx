import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const ParcelForm = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { handleSubmit, setValue, register, reset } = useForm();
  const [currentDate] = useState(new Date().toISOString().split("T")[0]);

  //   Handle submit
  const onSubmit = async (data) => {
    data.name = user.displayName,
    data.email = user.email;
    data.status = "pending";
    data.bookingDate = currentDate,
    console.log("Form submitted:", data);
    const res = await axiosSecure.post("/bookings", data);
    if (res.data.acknowledged === true) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Booking successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }
  };

  const handleInputChange = (name, value) => {
    setValue(name, value);

    // Calculate price based on parcel weight
    if (name === "parcelWeight") {
      setValue("price", calculatePrice(value));
    }
  };

  const calculatePrice = (weight) => {
    if (weight == 1) {
      return 50;
    } else if (weight == 2) {
      return 100;
    } else {
      return 150;
    }
  };

  return (
    <div className="card shrink-0 w-full shadow-2xl bg-sky-200">
      <form
        className="card-body font-semibold text-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control">
          <div className="lg:flex gap-10">
            <div className="lg:w-1/2 mb-4">
              <label className="label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.displayName}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <label className="label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Other Form Fields */}
          <div className="lg:flex gap-10">
            <div className="mb-4 lg:w-1/2">
              <label className="label">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                {...register("phoneNumber", { required: true })}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                className="input input-bordered w-full"
              />
            </div>

            <div className="mb-4 lg:w-1/2">
              <label className="label">Parcel Type:</label>
              <input
                type="text"
                id="parcelType"
                name="parcelType"
                {...register("parcelType", { required: true })}
                onChange={(e) =>
                  handleInputChange("parcelType", e.target.value)
                }
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="lg:flex gap-10">
            <div className="mb-4 lg:w-1/2">
              <label className="label">Receiver's Name:</label>
              <input
                type="text"
                id="receiverName"
                name="receiverName"
                {...register("receiverName", { required: true })}
                onChange={(e) =>
                  handleInputChange("receiverName", e.target.value)
                }
                className="input input-bordered w-full"
              />
            </div>

            <div className="mb-4 lg:w-1/2">
              <label className="label">Receiver's Phone Number:</label>
              <input
                type="tel"
                id="receiverPhoneNumber"
                name="receiverPhoneNumber"
                {...register("receiverPhoneNumber", { required: true })}
                onChange={(e) =>
                  handleInputChange("receiverPhoneNumber", e.target.value)
                }
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="lg:flex gap-10">
            <div className="mb-4 lg:w-3/4">
              <label className="label">Parcel Delivery Address:</label>
              <textarea
                id="parcelDeliveryAddress"
                name="parcelDeliveryAddress"
                {...register("parcelDeliveryAddress", { required: true })}
                onChange={(e) =>
                  handleInputChange("parcelDeliveryAddress", e.target.value)
                }
                className="input input-bordered w-full"
              ></textarea>
            </div>

            <div className="mb-4 lg:w-1/4">
              <label className="label">Requested Delivery Date:</label>
              <input
                type="date"
                id="requestedDeliveryDate"
                name="requestedDeliveryDate"
                {...register("requestedDeliveryDate", { required: true })}
                onChange={(e) =>
                  handleInputChange("requestedDeliveryDate", e.target.value)
                }
                min={currentDate}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="lg:flex gap-10">
            <div className="mb-4 lg:w-1/2">
              <label className="label">Delivery Address Latitude:</label>
              <input
                type="number"
                id="deliveryAddressLatitude"
                name="deliveryAddressLatitude"
                step="any"
                {...register("deliveryAddressLatitude", { required: true })}
                onChange={(e) =>
                  handleInputChange("deliveryAddressLatitude", e.target.value)
                }
                className="input input-bordered w-full"
              />
            </div>

            <div className="mb-4 lg:w-1/2">
              <label className="label">Delivery Address Longitude:</label>
              <input
                type="number"
                id="deliveryAddressLongitude"
                name="deliveryAddressLongitude"
                step="any"
                {...register("deliveryAddressLongitude", { required: true })}
                onChange={(e) =>
                  handleInputChange("deliveryAddressLongitude", e.target.value)
                }
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Auto Calculated Price Field (Read-only) */}
          <div className="lg:flex gap-10">
            <div className="mb-4">
              <label className="label">Parcel Weight (kg):</label>
              <input
                type="number"
                id="parcelWeight"
                name="parcelWeight"
                min="0"
                {...register("parcelWeight", { required: true })}
                onChange={(e) =>
                  handleInputChange("parcelWeight", e.target.value)
                }
                className="input input-bordered"
              />
            </div>

            <div className="mb-4">
              <label className="label">Price (Tk):</label>
              <input
                type="number"
                id="price"
                name="price"
                readOnly
                {...register("price")}
                className="input input-bordered"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary hover:bg-blue-700 text-white font-bold"
            >
              Book Parcel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ParcelForm;
