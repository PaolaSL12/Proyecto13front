import React from 'react'

const FormPassword = ({ errors, register, isPatternRequired }) => {
    return (
      <div>
        <label>Contraseña:</label>
        <input 
          type="password" 
          {...register("password", { 
            required: true,
            ...(isPatternRequired && {
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "La contraseña debe incluir números, letras Mayúsculas y minúsculas y tener al menos 8 caracteres",
              },
            })
          })}
          className={errors.password ? "error" : ""}
        />
        {errors.password && (
          <p className="error-message">
            {errors.password.type === "required"
              ? "La contraseña es requerida"
              : errors.password.message}
          </p>
        )}
      </div>
    );
  };
  
  export default FormPassword;