import React from 'react'

const FormStylists = ({ errors, register, stylists}) => {
  return (
    <div>
          <label>Estilista:</label>
          <select
            {...register("stylist", { required: true })}
            className={errors.stylist ? "error" : ""}
          >
            <option key="-" value="-">
              Seleccione estilista
            </option>
            {stylists.map((stylist) => (
              <option key={stylist._id} value={stylist._id}>
                {stylist.name}
              </option>
            ))}
          </select>
          {errors.stylist && (
            <p className="error-message">El estilista es requerido</p>
          )}
        </div>
  )
}

export default FormStylists