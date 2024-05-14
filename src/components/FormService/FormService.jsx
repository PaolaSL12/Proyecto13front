import React from "react";

const FormService = ({ errors, register, services, id}) => {
  return (
    <div>
      <label>Servicio:</label>
      <select
        {...register("service", { required: true })}
        defaultValue={id ? id : ""}
      >
        {services.map((service) => (
          <option key={service._id} value={service._id}>
            {service.name}
          </option>
        ))}
      </select>
      {errors.service && id && (
        <p className="error-message">El servicio es requerido</p>
      )}
    </div>
  );
};

export default FormService;
