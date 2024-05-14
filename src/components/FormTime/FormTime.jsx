import React from "react";
import { startTimeOptions } from "../../utils/data/startTimeOptions";

const FormTime = ({ errors, register}) => {
  return (
    <div>
      <label>Hora de inicio:</label>
      <select
        {...register("startTime", { required: true })}
        className={errors.startTime ? "error" : ""}
      >
        {startTimeOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors.startTime && (
        <p className="error-message">La hora de inicio es requerida</p>
      )}
    </div>
  );
};

export default FormTime;
