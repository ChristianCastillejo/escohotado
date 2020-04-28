import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import cookie from "react-cookies";
import { login } from "../actions/session";

export default function Login({ history }) {
  const session = useSelector((state) => state.session);
  const [formDetails, setformDetails] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      session.id &&
      cookie.load("uid") &&
      cookie.load("client") &&
      cookie.load("access-token")
    ) {
      history.push(`/admin`);
    }
  }, [session, history]);

  return (
    <div className="screen login-screen">
      <div className="login-container">
        <input
          placeholder="Email"
          value={formDetails.email}
          name="email"
          type="email"
          onChange={(e) =>
            setformDetails({
              ...formDetails,
              [e.target.name]: e.target.value,
            })
          }
          required
        />
        <input
          placeholder="Password"
          value={formDetails.password}
          name="password"
          type="password"
          onChange={(e) =>
            setformDetails({
              ...formDetails,
              [e.target.name]: e.target.value,
            })
          }
          required
        />
        <button
          className="login-button"
          type="subbmit"
          onClick={() => dispatch(login(formDetails))}
        >
          Login
        </button>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};
