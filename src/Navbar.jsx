import './Navbar.css'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './Home';
import Solutions from './Solutions';
import About from './About';
import Resources from './Resources';
import Contact from './Contact';
import Blog from './Blog';
import Login from './Login';

function Navbar(){
	return(
		<>
			<BrowserRouter>
				<div className="navbar">
					<img src="Img/logo.png" alt="Ketan" />
					<div className="flex-column flex-lg-row navbar-lists">
						<Link to="/"><li className="home-li">Home</li></Link>
						{/*<Link to="/solutions"><li>Solutions</li></Link>*/}
						<Link to="/about"><li>About</li></Link>
						{/*<Link to="/resources"><li>Resources</li></Link>*/}
						<Link to="/contact"><li>Contact</li></Link>
						<Link to="/blog"><li>Blog</li></Link>
						<button className="Invoice-btn">Pay My Invoice</button>
						<Link to="/login"><button className="login-btn">Login</button></Link>
					</div>
				</div>
				<Routes>
					<Route path="/" element={<Home />} />
					{/*<Route path="/solutions" element={<Solutions />} />*/}
					<Route path="/about" element={<About />} />
					{/*<Route path="/resources" element={<Resources />} />*/}
					<Route path="/contact" element={<Contact />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
export default Navbar;
