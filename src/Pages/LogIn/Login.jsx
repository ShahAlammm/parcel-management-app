import img from "../../assets/authentication.gif";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="shadow-2xl p-10">
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm font-semibold">
              <h1 className="text-5xl text-center p-3 font-bold">Login now!</h1>
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />

                  {/* <button className="btn btn-outline btn-error btn-xs mt-3">
                    validate
                  </button> */}
                </div>
                <div className="form-control mt-5">
                  <input
                    // disabled={disabled}
                    type="submit"
                    value="Sign in"
                    className="btn bg-[#D1A054B2] text-white"
                  />
                </div>
              </form>
              <p className="text-center text-[#D1A054B2] font-bold">
                <Link to={"/signup"}>New here? Create a New Account</Link>
              </p>
              <p className="text-center font-semibold">Or sign in with</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
