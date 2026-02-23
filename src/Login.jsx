import './Login.css';

function Login(){
	return(
		<>
			<div className="container Login-section1 align-items-center">
				<form>
					<h4>Customer Area Login</h4>
					<div className="Login-section1-main">
						<h6>User Id</h6>
						<div className="login-inputs">
							<i className="fa-solid fa-user"></i>
							<input type="text" placeholder="Enter Username"/>
						</div>
						<h6>Password</h6>
						<div className="login-inputs">
							<i className="fa-solid fa-key"></i>
							<input type="password" placeholder="Enter Username"/>
						</div>
						<div className="acc-login-button">
							<input type="button" value="Login" className="acc-login-btn"/>
						</div>
						<p>Forget your password?<span className="login-getIt">Get it here</span></p>
					</div>
				</form>
			</div>
		</>
	);
}
export default Login;