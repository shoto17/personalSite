import '../styles/styleHome.css'
import '../styles/styleContact.css'

const Contact = () => {
    location.hash = '/contact';
    const view = `
        <div class="home">
            <div class="home-left">
                <!--<a href="">Watch</a>-->
                <a href="#/:home">Home</a>
                <a href="#/aboutme"><img src="../src/assets/images/usuario.png" alt=""></a>
                <!-- <img src="../public/assets/images/brandon3.jpg" alt=""> -->
                <a href="#/tasks"><img src="../src/assets/images/portafolio.png" alt=""></a>
                <a href="#/meetings"><img src="../src/assets/images/grupo.png" alt=""></a>
                <a href="#/contact"><img src="../src/assets/images/contacto.png" alt=""></a>
                <a href=""><img src="../src/assets/images/cerrar-sesion.png" alt=""></a>
            </div>
            <div class="home-middle" id = "home-middle">
                <h1 class="home-middle-body">Contact</h1>
                <div class = "home-middle-grid">
                    <div class="home-middle-contact">
                        <a href="https://www.facebook.com/brandon.cervantesrubi"><img src="../src/assets/images/facebook.png" alt=""></a>
                        <a href="https://twitter.com/Brandon_CGO"><img src="../src/assets/images/twitter.png" alt=""></a>
                        <a href="https://github.com/shoto17"><img src="../src/assets/images/github.png" alt=""></a>
                    </div>
                    <div class = "home-middle-text">
                        <h2>My Facebook.</h2>
                        <h2>My Twitter.</h2>
                        <h2>My GitHub.</h2>
                    </div>
                </div>
                <h1 class="home-middle-body">...</h1>
            </div>
            <div class="home-right">
                <h1 class="home-middle-extra">Dato inutil</h1>
                <h3>Tokio tiene el menor porcentaje de propietarios de vehículos 
                    de todo Japon. Muchas empresas prohíben ir al trabajo en coche; 
                    a cambio, te pagan la tarjeta de transporte público. Ademas para 
                    comprarte un coche tienes que demostrar antes que cuentas con un 
                    parking donde guardarlo.
                </h3>
                <a href="#/404c" id = "error404"><img src = "../src/assets/images/error-404.png"></a>
            </div>
        </div>
    `;
    return view;
};

export default Contact;