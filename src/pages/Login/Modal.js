import React, { useContext } from "react";
import { sharedContext } from "../../context/UserContext";

const Modal = () => {
  const {resetUserPassword} = useContext(sharedContext);
  const handleResetPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetUserPassword(email)
  }
  return (
    <div className="flex justify-center items-center text-center">
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
          Forgot Password?
          </h3>
          <p className="py-4">
          Enter your email to reset password
          </p>
          <form onSubmit={handleResetPass}>
            <div>
            <input type="email" name="email" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            </div>
            <button className="btn btn-sm btn-primary mt-4" type="submit">Send Reset Eamil</button>
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn btn-sm btn-accent px-5">
              Ok
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
