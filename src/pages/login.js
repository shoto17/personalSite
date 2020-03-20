import '../styles/style.css'
import '../utils/check'


const Login = () => {
    const view = `
        <div class="signIn">
            <div class="signIn-image">
                <img src="../src/assets/images/signIn4.png" alt="Eqisde">
            </div>
            <div class="signIn-form">
                <h1>Log you in</h1>
                <form action = "#/:home">
                    <!-- <label for="user"></label> -->
                    <input type="text" placeholder="exampleUser" id="username">

                    <!-- <label for="user"></label> -->
                    <input type="password" placeholder="password" id="password">
                    <input type="submit" value="Login" id="submit"/>
                    <div class="contact">
                        <h3>Created by: shoto</h3>
                        <h3>Email: mrkyloren117@gmail.com</h3>
                    </div>
                </form>
            </div>
        </div> 
    `;
    return view;
};



export default Login;