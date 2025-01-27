import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { verifyEmail } from "../../api";

const VerifyEmail = () => {
  const { token } = useParams();

  useEffect(() => {
    const verify = async () => {
      try {
        await verifyEmail(token);
        alert("Email verified successfully!");
      } catch (err) {
        alert("Verification failed!");
      }
    };
    verify();
  }, [token]);

  return <h2>Verifying Email...</h2>;
};

export default VerifyEmail;
