function InputEmail(){
    return (
        <div className="inputContainer">
          
          <label htmlFor="email">
            E-mail
          </label>
          <input 
            type="text" 
            name="email" 
            id="email" 
            placeholder="Digite seu email..." 
          />
        </div>

    )
}
export default InputEmail