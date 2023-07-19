import logo from './assets/Logo.svg';
import "./global.css"


function App() {
  return (
    <div className="container">
      <div className="Logo">
        <img src={logo} alt="" />
      </div>
      <form className="Formulario">
        <div className="inputContainer">
          <p className='Login'>Login</p>
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

        <button className="button">
        CONECTAR

        </button>
        <div className="footer">

        <a href="Esqueceu a senha ?">"Esqueceu a senha ?</a>

        <a href="Não possui conta?">Não possui conta? Registre-se</a>
        </div>
        



      </form>


    </div>
  );
}

export default App;
