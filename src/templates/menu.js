import '../styles/styleHome.css'
/*Se intento hacer un template con esto, pero no quedo*/
const Menu = () => {
    location.hash = '/:menu';
    const view = `
        <div class="home">
            <div class="home-left">
                <a href="">Watch</a>
                <a href="#/:home">Home</a>
                <a href=""><img src="../src/assets/images/usuario.png" alt=""></a>
                <!-- <img src="../public/assets/images/brandon3.jpg" alt=""> -->
                <a href=""><img src="../src/assets/images/portafolio.png" alt=""></a>
                <a href=""><img src="../src/assets/images/grupo.png" alt=""></a>
                <a href=""><img src="../src/assets/images/cerrar-sesion.png" alt=""></a>
            </div>
            <div class="home-middle" id = "home-middle">
                <h1 class="home-middle-body">Body</h1>
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

export default Menu;