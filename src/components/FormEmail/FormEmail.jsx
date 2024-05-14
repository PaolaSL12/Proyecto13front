import React from 'react'

const FormEmail = ({ errors, register}) => {
  return (
    <div>
          <label>Email:</label>
          <input
          className={errors.email ? "error" : ""}
          {...register("email", {
            required: "El email es requerido",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Debes poner un formato email correcto",
            },
          })}
        />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
  )
}

export default FormEmail