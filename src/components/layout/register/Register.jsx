import './register.css'

const Register= () =>{
    return (
        <>
        <div className='registerContainer'>
            <h2>Únete Hoy</h2>
            <div className='registerBtns'>
                <div className='registerBtnCont'>
                    <img className='imgGoogle' src="src\assets\google.png" alt="Google" />
                    <label htmlFor="">Registrese con Google</label>
                </div>
                <div className='registerBtnCont'>
                    <img className='imgApple' src="src\assets\apple.png" alt="Apple" />
                    <label htmlFor="">Registrese con Aple</label>
                </div>
                <p>O</p>
                <input type="button" value="Crear cuenta" style={{ fontFamily: "'Google Sans', sans-serif" }} />
                <span>Al registrarte, aceptas los <a href="#">Términos de servicio</a> y la <a href="">Política <br /> de privacidad</a>, incluida la política de <a href="#">Uso de Cookies</a>.</span>
                
            </div>
        </div>
        </>
    )
}
export default Register