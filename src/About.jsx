import './About.css';
import Footer from './Footer';

function About(){
	return(
		<>
			{/*Section1*/}
			<div className="About-section1">
				<img src="Img/About-section1-img.png" alt="Background" />
				<div className="container About-section1-text">
					<h1>Innovation</h1>	
					<p><em>is our passion</em></p>
				</div>
			</div>
			
			
			{/*Section2*/}
			<h1 className="About-s2Heading">
				Satisfying the customer is our number one goal <br />providing innovative solutions 
				that help our <br /> customers advance their objectives is our <br />ongoing 
				responsibility.
			</h1>
			<div className="container About-section2">
				<p>
					Etactics is a leading business solutions organization committed to providing 
					innovative,<br/> web-based solutions that improve our clients’ cash management and 
					customer <br/>relationships. Our products and services assist our clients across 
					various business <br/> sectors to improve business processes, boost staff 
					productivity, reduce expenses and <br/> accelerate payment.
				</p>
				<p>
					Etactics has continued to grow and be recognized for its operational performance by 
					<br/>many esteemed groups including Weatherhead 100, Cascade Capital Corporation, 
					
					and <br/>Smart Business Magazine. We recognize that the only reason our clients send
					a bill is to <br/> be paid. We design our efforts to help them achieve that goal by 
					adhering to our three <br/>core competencies - Passion. Excellence. Innovation.
				</p>
				<a> Download our introduction brochure</a>
			</div>
			
			
			{/*Section3*/}
			<div className="About-section3">
				<img src="Img/About-section3-img.png" alt="Background" />
				<div className="container About-section3-text">
					<h1>Our Team</h1>	
					<p><em>The best and brightest</em></p>
				</div>
			</div>
			
			
			{/*Section4*/}
			<h2 className="About-s4Heading">Senior Management</h2>
			<div className="container flex-column flex-lg-row About-section4">
				{/*Box1*/}
				<div className="About-section4-box1">
					<img src="Img/about-section4Img1.png" alt="error" />
					<a>Michael Teutsch</a>
					<p>Founder, CEO</p>
				</div>
				{/*Box2*/}
				<div className="About-section4-box1">
					<img src="Img/about-section4Img2.png" alt="error" />
					<a>Carl Trownson</a>
					<p>Senior Vice President (Retired)</p>
				</div>
				{/*Box3*/}
				<div className="About-section4-box1">
					<img src="Img/about-section4Img3.png" alt="error" />
					<a>Bill Salm, Jr.</a>
					<p>President</p>
				</div>
			</div>
			
			
			{/*Section 5*/}
			<div className="About-section5 flex-column flex-lg-row">
				{/*Box1*/}
				<div className="About-section5-box1">
					<h1>A 2021 Top Workplace Winner</h1>
					<p>
						Etactics perservered amid a global pandemic in 2020 and <br/>emerged among the 
						top 100 small businesses in Northeast Ohio <br/>by The Cleveland Plain Dealer as
						a 2021 Top Workplaces winner.<br/> Etactics prides itself on its unique and team
						-driven culture. As<br/> such, a handful of team members sat down for a video 
						interview<br/> where they were asked, “What makes Etactics a Top Workplace?”
					</p>
					<div className="ratio ratio-16x9" style={{maxWidth: "450px"}}>
						<iframe src="https://www.youtube.com/embed/ecXWMsM3ZNQ" 
						title="YouTube video player" 
						allowFullScreen>
						</iframe>
					</div>
				</div>
				{/*Box2*/}
				<div className="About-section5-box1">
					<h1>A 2021 Inc. 5000 Winner</h1>
					<p>
						Two months after securing a 2021 Top Workplaces win, Inc.<br/> 5000 announced 
						that Etactics made its list as one of America’s<br/> Fastest-Growing Businesses.
						In celebration, we asked our<br/> leaders, “What makes the Etactics team special
						?” Their<br/> responses are a direct reflection of our success.<br/> where they 
						were asked, “What makes Etactics a Top Workplace?”
					</p>
					<div className="ratio ratio-16x9" style={{maxWidth: "450px"}}>
						<iframe src="https://www.youtube.com/embed/ecXWMsM3ZNQ" 
						title="YouTube video player" 
						allowFullScreen>
						</iframe>
					</div>
				</div>
			</div>
			
			{/*Section6*/}
			<div className="About-section6">
				<img src="Img/About-section6-img.png" alt="Background" />
				<div className="container About-section6-text">
					<h1>Our Team</h1>	
					<p><em>The best and brightest</em></p>
				</div>
			</div>
			
			
			{/*Section7*/}
			<h1 className="About-s7Heading">Careers</h1>
			<h1 className="About-s7Heading">
				We are excited that you want to explore a professional career <br/>with us. 
			</h1>
			<div className="container About-section7">
				<p>
					If you are selected to interview with our organization, you can expect to enjoy two 
					to four interviews with hiring managers, cross-<br/>functional business partners, 
					and other managers that will evaluate your professional credentials and skills. As 
					an employee, you can<br/> expect to receive mentoring from these same professionals 
					who have several years of professional experience and knowledge that <br/>they are 
					willing to share with all employee/partners at Etactics.
				</p>
				<p>
					Etactics assists you in building your career one step at a time, and we will give 
					you all of the professional tools and resources required <br/>in order to allow you 
					to become successful, set goals, and maximize your professional potential.
				</p>
				<a> Apply Today</a>
			</div>
			
			
			{/*Section8*/}
			<div className="About-section8">
				<img src="Img/About-section8-img.png" alt="Background" />
				<div className="container About-section8-text">
					<h1>Partnership Program</h1>	
					<p><em>Join our family</em></p>
				</div>
			</div>
			
			{/*Section9*/}
			<h1 className="About-s9Heading">Partnership Program</h1>
			<h1 className="About-s9Heading">
				Etactics, Inc. offers the opportunity to introduce our SaaS-based <br/>solutions as 
				Resellers				
			</h1>
			<div className="container About-section9">
				<p>
					Re-sellers are qualified and considered on their ability to inform, educate, market 
					and sell our innovative business solutions. They are <br/>supported by a program 
					that includes...
				</p>
				<div className="About-sectio9-lists">
					<li>Educational, marketing and sales support to enable partner success</li>
					<li>Technology or solution demonstration support as needed</li>
					<li>Recurring monthly revenue stream and residual commissions</li>
					<li>
					A revenue cycle solutions partner committed to ensuring its solutions remain 
					relevant
					</li>
					<li>Unlimited opportunity to serve customers with industry leading solutions</li>
				</div>
				<h1 className="About-s9Heading">Learn about our partnership with MHA</h1>
				<a>Learn More</a>
			</div>
			<Footer/>
		</>
	);
}
export default About;