function InputSenha(){
    return(
        <div className="inputContainer">
          <label htmlFor="password">
          Senha 
          </label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Digite sua senha..." 
          />
        </div>
    )
}
export default InputSenha