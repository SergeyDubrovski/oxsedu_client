import React from "react";
import { reduxForm, Field } from "redux-form";

const FormReg = (props) => {
  
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>E-mail</label>

          <Field
            name="email"
            component="input"
            type="text"
            placeholder="Введите ваш E-mail"
          />
        </div>
        <div>
          <label>Пароль</label>

          <Field
          
            name="password"
            component="input"
            type="text"
            placeholder="Введите ваш пароль"
          />
        </div>
        <button type="submit" >Send</button>
      </form>

    </div>
  );
};

const FormRegRedux = reduxForm({
  form: "registr",
})(FormReg);
export default FormRegRedux
