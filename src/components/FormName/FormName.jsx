import React from 'react'

const FormName = ({errors, register}) => {
  return (
    <div>
        <label>Nombre:</label>
        <input
            {...register("name", { required: true })}
            className={errors.name ? "error" : ""}
          />
          {errors.name && (
            <p className="error-message">El nombre es requerido</p>
          )}
      </div>
  )
}

export default FormName