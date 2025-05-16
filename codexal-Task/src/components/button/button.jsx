
import React, { useState } from "react";
import "./button.css";
import UserModal from "../modal/modal";

const Button = ({ user }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <button className="details-button" onClick={handleOpen}>
        المزيد من المعلومات
      </button>
      {showModal && <UserModal user={user} onClose={handleClose} />}
    </>
  );
};

export default Button;
