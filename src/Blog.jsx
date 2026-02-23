import './Blog.css';
import Footer from './Footer';

function Blog(){
	return(
		<>
			{/*Section1*/}
			<div id="cyberCarousel" className="carousel slide Blog-section1" data-bs-ride="carousel">
				<div className="carousel-inner">

				  {/*Slide 1*/}
				  <div className="carousel-item active" style={{backgroundImage:` 
					url('Img/Blog-section1-img1.png')`}}>
					<div className="carousel-caption text-white">
					  <p className="text-success fw-bold">Cybersecurity</p>
					  <h5>[ANSWERED] Why Cybersecurity is Important?</h5>
					  <button className="btn-custom">View Post →</button>
					</div>
				  </div>

				  {/*Slide 2*/}
				  <div className="carousel-item" style={{backgroundImage:` 
					url('Img/Blog-section1-img2.png')`
					}}>
					<div className="carousel-caption text-white">
					  <p className="text-success fw-bold">Compliance</p>
					  <h5>What it Means to be HIPAA Compliant (It’s ...</h5>
					  <button className="btn-custom">View Post →</button>
					</div>
				  </div>

				  {/*Slide 3*/}
				  <div className="carousel-item" style={{backgroundImage:` 
					url('Img/Blog-section1-img3.png')`
					}}>
					<div className="carousel-caption text-white">
					  <p className="text-success fw-bold">Patient Engagement</p>
					  <h5>Sample Good Reviews for Doctors and Dentists by ...</h5>
					  <button className="btn-custom">View Post →</button>
					</div>
				  </div>

				  {/*Slide 4*/}
				  <div className="carousel-item" style={{backgroundImage:` 
					url('Img/Blog-section1-img4.png')`
					}}>
					<div className="carousel-caption text-white">
					  <p className="text-success fw-bold">Revenue Cycle</p>
					  <h5>In-Network vs. Out-of-Network: The Difference ...</h5>
					  <button className="btn-custom">View Post →</button>
					</div>
				  </div>

				  {/*Slide 5*/}
				  <div className="carousel-item" style={{backgroundImage:` 
					url('Img/Blog-section1-img5.png')`
					}}>
					<div className="carousel-caption text-white">
					  <p className="text-success fw-bold">Compliance, Artificial Intelligence</p>
					  <h5>NIST AI RMF Playbook Explained: How to Use the ...</h5>
					  <button className="btn-custom">View Post →</button>
					</div>
				  </div>
				</div>

				{/*Controls*/}
				<button className="carousel-control-prev" type="button" data-bs-target="#cyberCarousel" 
				data-bs-slide="prev">
				  <span className="carousel-control-prev-icon"></span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#cyberCarousel" 
				data-bs-slide="next">
				  <span className="carousel-control-next-icon"></span>
				</button>
			</div>
			
			{/*Section2*/}
			<div className="container flex-column flex-lg-row  Blog-section2">
				{/*top*/}
				<div className="Blog-section2-top">
					{/*Box1*/}
					<div className="Blog-section2-box1">
						<h4>Cybersecurity</h4>
						<h2>[ANSWERED] Why Cybersecurity is <br/>Important?</h2>
						<div className="Blog-section2-box1-paras">
							<p>Abby Donoughe</p>
							<p>August 29, 2025</p>
						</div>
						<img src="Img/blog-section2-img1.png" alt="error" className="img-fluid"/>
						<p>
							In a world where cyberattacks can happen at any moment, prioritizing 
							cybersecurity is not<br/> just an IT concern; it’s a critical step in 
							ensuring personal security, financial stability, and<br/> public trust. 
						</p>
						<a>Read More →</a>
					</div>
					
					{/*Box2*/}
					<div className="Blog-section2-box1">
						<h4>Compliance</h4>
						<h2>What it Means to be HIPAA <br />Compliant (It’s Surprising)</h2>
						<div className="Blog-section2-box1-paras">
							<p>Matt Moneypenny</p>
							<p>August 29, 2025</p>
						</div>
						<img src="Img/blog-section2-img2.png" alt="error" className="img-fluid"/>
						<p>
							What does it mean to be HIPAA compliant? Let’s look at each part of the 
							regulation to<br/> answer that question. 
						</p>
						<a>Read More →</a>
					</div>
					{/*Box3*/}
					<div className="Blog-section2-box1">
						<h4>Patient Engagement</h4>
						<h2>Sample Good Reviews for <br />Doctors and Dentists by Patients</h2>
						<div className="Blog-section2-box1-paras">
							<p>Matt Moneypenny</p>
							<p>August 22, 2025</p>
						</div>
						<img src="Img/blog-section2-img3.png" alt="error" className="img-fluid"/>
						<p>
							So how do you write a good review for a doctor? Let’s go over the step-by-
							step process and <br/> look at a few samples for reference. 
						</p>
						<a>Read More →</a>
					</div>
					
					{/*Box4*/}
					<div className="Blog-section2-box1">
						<h4>Revenue Cycle</h4>
						<h2>
							In-Network vs. Out-of-Network:<br/> The Difference in Care &<br/> 
							Providers
						</h2>
						<div className="Blog-section2-box1-paras">
							<p>Abby Donoughe</p>
							<p>August 15, 2025</p>
						</div>
						<img src="Img/blog-section2-img4.png" alt="error" className="img-fluid"/>
						<p>
							In this blog we are going to break down what “out-of-network” really means, 
							the cost <br/>implications, and how to make informed decisions when choosing
							a provider.  
						</p>
						<a>Read More →</a>
					</div>
					
					{/*Box5*/}
					<div className="Blog-section2-box1">
						<h4>Compliance, Artificial Intelligence</h4>
						<h2>
							NIST AI RMF Playbook Explained:<br/> How to Use the AI Risk<br/> Management 
							Framework<br/> Effectively
						</h2>
						<div className="Blog-section2-box1-paras">
							<p>Abby Donoughe</p>
							<p>August 8, 2025</p>
						</div>
						<img src="Img/blog-section2-img5.png" alt="error" className="img-fluid"/>
						<p>
							Learn how to apply the NIST AI RMF and Playbook to reduce AI risks like bias
							, privacy<br/> issues, and transparency gaps, while still encouraging 
							innovation. 
						</p>
						<a>Read More →</a>
					</div>
					
					{/*Box6*/}
					<div className="Blog-section2-box1">
						<h4>Patient Payment, Revenue Cycle, Payment</h4>
						<h2>
							A Simple Guide to Website<br/> Payment Gateway Integrations
						</h2>
						<div className="Blog-section2-box1-paras">
							<p>Maria Mulgrew</p>
							<p>August 8, 2025</p>
						</div>
						<img src="Img/blog-section2-img6.png" alt="error" className="img-fluid"/>
						<p>
							Let's go over what a payment gateway is, how it benefits your online 
							business, and tips on<br/> choosing the right payment processor.  
						</p>
						<a>Read More →</a>
					</div>
					
					{/*Box7*/}
					<div className="Blog-section2-box1">
						<h4>Revenue Cycle</h4>
						<h2>
							8 Past Due Letter Templates That<br/> Get You Paid
						</h2>
						<div className="Blog-section2-box1-paras">
							<p>Matt Moneypenny</p>
							<p>August 1, 2025</p>
						</div>
						<img src="Img/blog-section2-img8.png" alt="error" className="img-fluid"/>
						<p>
							Sending a past due letter is one thing, but they’ll only work effectively if
							they’re designed<br/> well enough to catch the recipients attention. Here 
							are some examples of effective ones and<br/> techniques.  
						</p>
						<a>Read More →</a>
					</div>
					
					{/*Box8*/}
					<div className="Blog-section2-box1">
						<h4>Patient Payment</h4>
						<h2>
							Patient Payment Solutions for<br/> Healthcare Billing
						</h2>
						<div className="Blog-section2-box1-paras">
							<p>Abby Donoughe</p>
							<p>July 25, 2025</p>
						</div>
						<img src="Img/blog-section2-img9.png" alt="error" className="img-fluid"/>
						<p>
							Collecting patient payment isn’t an easy task. As the healthcare landscape 
							continues to<br/> change, healthcare organizations are left behind trying to
							find out why their collection<br/> process continues to slow down. They’re 
							not the only one.  
						</p>
						<a>Read More →</a>
					</div>
					
					{/*Box9*/}
					<div className="Blog-section2-box1">
						<h4>Compliance</h4>
						<h2>
							HIPAA Security Risk Assessment:<br/> Identifying HIPAA Security Risks
						</h2>
						<div className="Blog-section2-box1-paras">
							<p>Todd Stanton</p>
							<p>July 25, 2025</p>
						</div>
						<img src="Img/blog-section2-img10.png" alt="error" className="img-fluid"/>
						<p>
							HIPAA Security Risk Assessment: Identify HIPAA security risks and 
							vulnerabilities. Ensure<br/> compliance with HIPAA Security Rule.  
						</p>
						<a>Read More →</a>
					</div>
					
					{/*Box10*/}
					<div className="Blog-section2-box1">
						<h4>Healthcare Claims, Revenue Cycle</h4>
						<h2>
							CO 24 Denial Code: Reason Code,<br/> Explanation, and Resolution
						</h2>
						<div className="Blog-section2-box1-paras">
							<p>Abby Donoughe</p>
							<p>July 18, 2025</p>
						</div>
						<img src="Img/blog-section2-img11.png" alt="error" className="img-fluid"/>
						<p>
							In this blog, we break down what it means, why it's important, how to 
							prevent it, and what to<br/> do after encountering the CO 24 denial.  
						</p>
						<a>Read More →</a>
					</div>
					<p className="blog-section2-OlderPosts">Older Posts</p>
				</div>
				
				{/*Bottom*/}
				<div className="Blog-section2-bottom">
					<h1>Our Services</h1>
					{/*Box1*/}
					<div className="Blog-section2-bottom-box1">
						<img src="Img/Blog-section2-bottomImg1.png"/>
						<img src="Img/Blog-section2-bottomImg2.png"/>
						<img src="Img/Blog-section2-bottomImg3.png"/>
						<img src="Img/Blog-section2-bottomImg4.png"/>
						<img src="Img/Blog-section2-bottomImg5.png"/>
						<img src="Img/Blog-section2-bottomImg6.png"/>
						<img src="Img/Blog-section2-bottomImg7.png"/>
						<img src="Img/Blog-section2-bottomImg8.png"/>
						<img src="Img/Blog-section2-bottomImg9.png"/>
					</div>
					{/*Box2*/}
					<div className="Blog-section2-bottom-box2">
						<hr />
						<h4>Sign Up for Our <br />Newsletter</h4>
						<form>
							<label>First name</label>
							<input type="text" required />
							<label>Last name</label>
							<input type="text" required />
							<label>Email</label>
							<input type="email" required />
							<input type="button" value="Submit" />
						</form>
						<hr />
					</div>
					{/*Box3*/}
					<div className="Blog-section2-bottom-box3">
						<h2>Posts by Category</h2>
						<li>Artificial Intelligence (4)</li>
						<li>CMMC (48)</li>
						<li>Collections (12)</li>
						<li>Compliance (141)</li>
						<li>Cybersecurity (56)</li>
						<li>Healthcare Claims (44)</li>
						<li>Infographic (11)</li>
						<li>Interview (7)</li>
						<li>Marketing (11)</li>
						<li>Patient Engagement (107)</li>
						<li>Patient Payment (39)</li>
						<li>Payment (14)</li>
						<li>Revenue Cycle (145)</li>
						<li>eLearning (97)</li>
						<hr />
						<h3>Disclaimers</h3>
						<p>Learn More</p>
					</div>
				</div>
			</div>
			<Footer/>
			
		</>
	);	
}
export default Blog;