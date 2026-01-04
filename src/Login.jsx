
function Display(){
    return (
            alert("login successful")
    );
}

function Login(){
    return (
        <div>
            <form name="login">
                Username:<input type="text" placeholder="Enter username"></input><br></br>
                Password:<input type="password" placeholder="Enter password"></input><br></br>
                <button onclick={Display()}>Login here</button>
            </form>
        </div>
    );
}

export default Login;