import logo from './assets/Logo.svg';
import "./global.css"
import FormularioLogin from './Components/FormularioLogin';


function App() {
  return (
    <div className="container">
      <div className="Logo">
        <img src={logo} alt="" />
      </div>
      <FormularioLogin/>


    </div>
  );
}

export default App;
