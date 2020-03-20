import '../styles/errorStyle.css'

const Error404 = () => {
    location.hash = "/404c"
    const view = `
        <div class = "error">
            <h1>Error 404 T_T</h1>
            <img src = "../src/assets/images/error.jpg">
            <a href = "#/:home">Go back</a>
        </div>
    `;
    return view;
}

export default Error404;