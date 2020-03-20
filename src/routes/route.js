import Home from '../pages/home'
import Login from '../pages/login'
import Error404 from '../pages/404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    "/": Login,
    "/:home": Home,
    "/404c": Error404
};

const router = async () => {
//    const header = null || document.getElementById("header");
    const content = document.getElementById("content");

//   content.innerHTML = await Login();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
 };

export default router;