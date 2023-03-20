import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import FormRegRedux from "./FormReg";
import { registrReducer, fetchReg } from "../../../redux/slices/regSlice";

export const Reg = ({
  registr,
  email,
  password,
  role,
  status,
  error,
  registrReducer,
  fetchReg,
}) => {
  const onClick = () => {
    registrReducer({
      email: registr.values.email,
      password: registr.values.password,
      role: "USER",
    });

    fetchReg({
      email: registr.values.email,
      password: registr.values.password,
      role: "USER",
    });
  };

  return (
    <div>
      {error && <div>{error}</div>}
      <FormRegRedux onSubmit={onClick} />
      <h1> email {email}</h1>
      <h1> password {password}</h1>
      <h1> user {role}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  registr: state.form.registr,
  email: state.regReducer.reg.email,
  password: state.regReducer.reg.password,
  role: state.regReducer.reg.role,
  status: state.regReducer.status,
  error: state.regReducer.error,
});

const mapDispatchToProps = { registrReducer, fetchReg };

export default connect(mapStateToProps, mapDispatchToProps)(Reg);
