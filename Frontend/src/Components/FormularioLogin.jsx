import Button from "./Button"
import InputEmail from "./InputEmail"
import InputSenha from "./InputSenha"
function FormularioLogin(){
    return(
        <form className="Formulario">
        <p className='Login'>Login</p>
        <InputEmail/>
        <InputSenha/>

        <Button/>
        <div className="footer">

        <a href="Esqueceu a senha ?">"Esqueceu a senha ?</a>

        <a href="Não possui conta?">Não possui conta? Registre-se</a>
        </div>

      </form>
    )
}
export default FormularioLogin