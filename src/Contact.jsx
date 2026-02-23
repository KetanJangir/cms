import './Contact.css';
import Footer from './Footer';


function Contact(){
	return(
		<>
			{/*Section1*/}
			<div className="Contact-section1">
				<img src="Img/Contact-section1-img.png" alt="Background" />
				<div className="container Contact-section1-text">
					<h1>Contact Us</h1>	
					<p><em>We're here for you</em></p>
				</div>
			</div>
			
			
			{/*Section2*/}
			<div className="container Contact-section2 flex-column flex-lg-row">
				{/*Box1*/}
				<div className="Contact-section2-box1">
					<img src="Img/contact-section2-img1.png" alt="error"/>
					<h2>Request a Demo</h2>	
					<p>
						Reach out to our Sales team directly <br/>for immediate assistance 
						with all <br/>sales-related inquiries.
					</p>
					<a>Schedule a Demo</a>
				</div>
				
				{/*Box2*/}
				<div className="Contact-section2-box1">
					<img src="Img/contact-section2-img2.png" alt="error"/>
					<h2>Client Support</h2>	
					<p>
						Get in touch with our customer<br/> support for assistance with your <br/>
						Etactics implementation.
					</p>
					<a>customer support</a>
				</div>
			</div>
			<Footer/>
		</>
	);	
}
export default Contact;