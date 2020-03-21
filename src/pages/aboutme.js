import '../styles/style.css';
import '../styles/styleMe.css'

const aboutMe = () => {
    location.hash = '/aboutme';

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
                <h1 class="home-middle-body">About Me</h1>
                <div class = "home-middle-body-me">
                    <img src="../src/assets/images/brandon3.jpg" alt="">
                    <div class = "home-middle-body-me-description">
                        <h3>Name: Brandon Cervantes Rubí</h3>
                        <h3>Nickname: Shoto</h3>
                        <h3>E-mail: mrkyloren117@gmail.com</h3>
                        <h3>Description: There's no much to say abaut me
                        I'm a engineering  student I like to play videogames, 
                        listen rock music and I enjoy whatching movies. 
                        I've been programing since 2017
                        but this is my first time touching Web things so
                        don't be so hard with me and send me your comments and
                        suggestions. I'll be waiting just to make this thing better</h3>
                    </div>
                </div>
                <h2 id = "home-middle-body-me-extra">I am studying at the faculty of engineering 
                at UNAM, I've been here since three years ago and actually I'm enjoying. Currently 
                I have no laboral experience in my area but there is a lot of time until I leave school, so 
                I'm not worried abaut that.</h2>
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

export default aboutMe;