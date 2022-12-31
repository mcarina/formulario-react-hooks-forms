import { useForm } from 'react-hook-form'
import validator from "validator";

const GoodForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) =>{
  }

  return (
    <div className="app-container">
      <div className="form-group">
        <label>Nome</label>
        <input
          className={errors?.name && "input-error"}
          type="text"
          {...register('name', {required: true})}
        />
        {errors?.name?.type === "required" && <p className="error-message">Campo Obrigatório</p>}
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          className={errors?.email && "input-error"}
          type="email"
          {...register('email', {required:true,
          validate: (value)=>validator.isEmail(value)})}
        />
        {errors?.email?.type === "required" && <p className="error-message">Campo Obrigatório</p>}
        {errors?.email?.type === "validate" && <p className="error-message">E-mail invalido</p>}
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input
          className={errors?.password && "input-error"}
          type="password"
          {...register('password', {required: true, minLength:4})}
        />
        {errors?.password?.type === "required" && (<p className="error-message">Digite sua senha</p>)}
        {errors?.password?.type === "minLength" && (<p className="error-message">No mínimo 4 dígitos</p>)}
      </div>

      <div className="form-group">
        <label>Profissão</label>
          <select
            className={errors?.profession && "input-error"}
            {...register('profession', {validate:(value)=>{
              return value !== "0"
            }})}
          >
            <option value="0">Selecione sua profissão...</option>
            <option value="developer">Desenvolvedor</option>
            <option value="other">Outra</option>
          </select>

        {errors?.profession?.type === "validate" && (<p className="error-message">Obrigatório</p>)}
      </div>
      

      <div className="form-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="privacy-policy"
            {...register('privacyterms', {required:true})}
          />
          <label>I agree with the privacy terms.</label>
        </div>

        {errors?.privacyterms?.type === "required" && (<p className="error-message">Obrigatório</p>)}
      </div>

      <div className="form-group">
        <button onClick={()=>handleSubmit(onSubmit)()}>Criar conta</button>
      </div>
    </div>
  );
};

export default GoodForm;
