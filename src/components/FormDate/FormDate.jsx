import React from "react";

const FormDate = ({ errors, register}) => {
  return (
    <div>
      <label>Fecha:</label>
      <input
        type="date"
        {...register("date", { required: true })}
        className={errors.date ? "error" : ""}
      />
      {errors.name && <p className="error-message">La fecha es requerida</p>}
    </div>
  );
};

export default FormDate;
