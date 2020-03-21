import Home from '../pages/home'
import Login from '../pages/login'
import Error404 from '../pages/404'
import Meetings from '../pages/meetings'
import aboutMe from '../pages/aboutme'
import Tasks from '../pages/tasks'
import Contact from '../pages/contact'

import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'



const routes = {
    "/": Login,
    "/:home": Home,
    "/404c": Error404,
    "/aboutme": aboutMe,
    "/meetings": Meetings, 
    "/tasks": Tasks,
    "/contact": Contact
};

const router = async () => {
    const content = document.getElementById("content");

//   content.innerHTML = await Login();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    
    content.innerHTML = await render();
 };

export default router;