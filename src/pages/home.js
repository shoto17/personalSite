import '../styles/styleHome.css'

const Home = () => {
    location.hash = '/:home';
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
                <h1 class="home-middle-body">Welcome</h1>
                <h2>I don't know what's gonna be here but there's a short description</h2>
                <h3>This is a project about a personal site, please browse and I hope 
                you enjoy it. You can try to enter to diferent pages using the 
                dashboard at your left or if you want to see a 404 page there's an 
                icon down right, isn't it? </h3>
                <img src="../src/assets/images/home.gif" alt="">
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

export default Home;