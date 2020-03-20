
function check(){
    var username = document.getElementById("username").nodeValue;
    var password = document.getElementById("password").nodeValue;
    if (username == "shoto117" && password == "1q2w3e4r"){
        alert('Welcome again');
        //window.location a ver como le hago T.T
        return false;
    }else{
        alert('Please try again')
        return false;
    }
}

export default check;