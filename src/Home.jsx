import Footer from './Footer';
import './Home.css';

function Home(){
	return(
		<>
		{/*Home Section1*/}
			<div className="Home-section1">
				<img src="Img/homeImg1.png" alt="Background" />
				<div className="container Home-section1-text">
					<h3 className="">— Software Development —</h3>
					<h1>Protect Your Bottom <br/>Line</h1>
					<p><em>Revenue Cycle, Compliance & Training</em></p>
					<button>WHO WE ARE</button>
				</div>
			</div>
			{/*Home Section2*/}
			<h1 className="home-section2h1">Software development to more than 5,000 clients</h1>
			<p className="home-section2p">Learn more about each of our solutions below. </p>
			<div className="container flex-column flex-lg-row Home-section2Main">
				{/*box1*/}
				<div className="Home-section2Box1">
					<img src="Img/HomeS1img1.png" />
					<h3>EDI FOR HEALTHCARE</h3>
					<p>
						IntelliClaim is our full-service<br/> 
						clearinghouse, AppealsPlus is our <br/>
						automated denial management software,<br/>
						and the Revenue Vitals Report is our full-<br/>
						service business intelligence report.
					</p>
					<a>LEARN MORE</a>
				</div>
				{/*box2*/}
				<div className="Home-section2Box1">
					<img src="Img/HomeS1img2.png" />
					<h3>elearning & Training</h3>
					<p>
						K2 Akademy is an elearning platform that<br/> 
						helps your organization stay in compliant<br/>
						with government training mandates on <br/>
						industry-specific requirements with a <br/>
						massive module library.
					</p>
					<a>LEARN MORE</a>
				</div>
				{/*box3*/}
				<div className="Home-section2Box1">
					<img src="Img/HomeS1img3.png" />
					<h3>CMMC Compliance</h3>
					<p>
						Work within the Defense Industrial Base?<br/>
						We’ve made a series of enhancements to <br/>
						K2 Compliance to help you meet CMMC's <br/>
						specific requirements before official <br/>
						rulemaking takes place.
					</p>
					<a>LEARN MORE</a>
				</div>
			</div>
			{/*section 2 bottomBoxes*/}
			<div className="container flex-column flex-lg-row Home-section2Main">
				{/*box1*/}
				<div className="Home-section2Box1">
					<img src="Img/HomeS1img4.png" />
					<h3>Governance, Risk & <br/>Compliance</h3>
					<p>
						K2 Compliance provides a comprehensive <br/>
						and streamlined way to stay ahead of the <br/>
						curve with their compliance. The tool <br/>
						contains essentially every framework.<br/>
					</p>
					<a>LEARN MORE</a>
				</div>
				{/*box2*/}
				<div className="Home-section2Box1">
					<img src="Img/HomeS1img5.png" />
					<h3>Payment & Presentment <br/> Suite</h3>
					<p>
						Although it sounds easy, collecting <br/>
						payment can cause quite the headache.<br/>
						Our Payment & Presentment Suite gives <br/>
						you all the PCI compliant, secure, fast. <br/>
					</p>
					<a>LEARN MORE</a>
				</div>
				{/*box3*/}
				<div className="Home-section2Box1">
					<img src="Img/HomeS1img6.png" />
					<h3>Statements, Invoices & Debt <br/>recovery Suite</h3>
					<p>
						IntelliClaim is our full-service<br/> 
						clearinghouse, AppealsPlus is our <br/>
						automated denial management software,<br/>
						and the Revenue Vitals Report is our full-<br/>
					</p>
					<a>LEARN MORE</a>
				</div>
			</div>
			{/*Section3*/}
			<div className="Home-section3">
				<img src="Img/homeSection3.png" alt="Background" />
				<div className="container Home-section3-text">
					<h1>About Us</h1>	
					<p><em>20 Years of Revenue Cycle Solutions</em></p>
				</div>
			</div>
			{/*Section4*/}
			<h1 className="Home-s4Heading">Offering Revenue Cycle Solutions for 20 Years</h1>
			<div className="container Home-section4">
				<p>
					Etactics was established in June of 1999. Our company was originally formed to 
					provide <br/>
					EDI for healthcare clients. Today we provide cost-effective revenue cycle solutions 
					to <br/>more than 4,000 healthcare clients across the United States. Our services 
					directly <br/>
					influence our clients' revenue cycle and how it can be better improved. 
					Additionally, our 
					<br/>products and services assist our clients improve business processes, boost 
					staff <br/>
					productivity, reduce expenses and accelerate payment.
				</p>
				<a>LEARN MORE</a>
			</div>
			{/*Section 4 video*/}
			<div className="container home-section4-video-main">
				<div className="home-section4-video ratio ratio-16x9">
				  <iframe 
					src="https://www.youtube.com/embed/ecXWMsM3ZNQ" 
					title="YouTube video player" 
					allowFullScreen>
				  </iframe>
				</div>
			</div>
			{/*Slider*/}
			<div className="container">
				<div className="row g-5">
					{/*LATEST BLOG POSTS*/}
					<div className="col-lg-6">
					  <h2 className="home-heading">LATEST BLOG POSTS</h2>
					  <div id="blogCarousel" className="carousel slide" data-bs-ride="false">
						<div className="carousel-inner">
						  <div className="carousel-item active">
							<div className="row">
							  <div className="col-md-6">
								<div className="card">
								  <img src="Img/Homeslider1.png" />
								  <div className="date">Aug 29, 2025</div>
								  <div className="title">[ANSWERED] WHY CYBERSECURITY IS IMPORTANT?</div
								  >
								</div>
							  </div>
							  <div className="col-md-6 d-none d-md-block">
								<div className="card">
								  <img src="Img/Homeslider2.png" />
								  <div className="date">Aug 29, 2025</div>
								  <div className="title">WHAT IT MEANS TO BE HIPAA COMPLIANT (IT’S 
								  SURPRISING)</div>
								</div>
							  </div>
							</div>
						</div>

						  <div className="carousel-item">
							<div className="row">
							  <div className="col-md-6">
								<div className="card">
								  <img src="Img/HomeSlider5.png" />
								  <div className="date">Aug 15, 2025</div>
								  <div className="title">ZERO-TRUST BASICS FOR SMALL TEAMS</div>
								</div>
							  </div>
							  <div className="col-md-6 d-none d-md-block">
								<div className="card">
								  <img src="Img/HomeSlider6.png" />
								  <div className="date">Aug 10, 2025</div>
								  <div className="title">PHI VS PII: KNOW THE DIFFERENCE</div>
								</div>
							  </div>
							</div>
						  </div>
						</div>

						{/*Controls*/}
						<button className="carousel-control-prev" type="button" data-bs-target=
						"#blogCarousel" data-bs-slide="prev">
						  <span className="carousel-control-prev-icon"></span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target=
						"#blogCarousel" data-bs-slide="next">
						  <span className="carousel-control-next-icon"></span>
						</button>
					  </div>
					</div>

					{/*IN THE PRESS*/}
					<div className="col-lg-6">
					  <h2 className="home-heading">IN THE PRESS</h2>
					  <div id="pressCarousel" className="carousel slide" data-bs-ride="false">
						<div className="carousel-inner">
						  <div className="carousel-item active">
							<div className="row">
							  <div className="col-md-6">
								<div className="card">
								  <img src="Img/Homeslider3.png" />
								  <div className="date">Jun 7, 2022</div>
								  <div className="title">ETACTICS TO HOST HUMAN TRAFFICKING TOWN HALL</
								  div>
								</div>
							  </div>
							  <div className="col-md-6 d-none d-md-block">
								<div className="card">
								  <img src="Img/Homeslider4.png" />
								  <div className="date">Jul 14, 2021</div>
								  <div className="title">PROMPT THERAPY SOLUTIONS, INC. TAPS ETACTICS</
								  div>
								</div>
							  </div>
							</div>
						  </div>

						  <div className="carousel-item">
							<div className="row">
							  <div className="col-md-6">
								<div className="card">
								  <img src="Img/HomeSlider7.png" />
								  <div className="date">Jan 2, 2021</div>
								  <div className="title">PARTNERSHIP EXPANDS TO NEW REGIONS</div>
								</div>
							  </div>
							  <div className="col-md-6 d-none d-md-block">
								<div className="card">
								  <img src="Img/HomeSlider8.png" />
								  <div className="date">Mar 10, 2021</div>
								  <div className="title">COMMUNITY OUTREACH SERIES ANNOUNCED</div>
								</div>
							  </div>
							</div>
						  </div>
						</div>

						{/*Controls*/}
						<button className="carousel-control-prev" type="button" data-bs-target=
						"#pressCarousel" data-bs-slide="prev">
						  <span className="carousel-control-prev-icon"></span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target=
						"#pressCarousel" data-bs-slide="next">
						  <span className="carousel-control-next-icon"></span>
						</button>
					  </div>
					</div>
				</div>
			</div>
			{/*Section5*/}
			<div className="Home-section5">
				<img src="Img/homeSection5.png" alt="Background" />
				<div className="container Home-section5-text">
					<h1>Partners</h1>	
					<p><em>who we work with</em></p>
				</div>
			</div>
			
			{/*Section6*/}
			<h1 className="Home-s6Heading">Partnerships Welcomed</h1>
			<div className="container Home-section6">
				<p>
					Etactics has successfully partnered with a select number of independent brokers, 
					VAR’s <br />
					and software companies throughout North America. We are open to working with 
					<br />companies that share are our same commitment to growth, customer service, 
					and <br /> excellence.
				</p>
				<a>LEARN MORE</a>
			</div>
			
			{/*Section 7*/}
			<h1 className="Home-s7Heading">Our Partners</h1>
			<div className="container Home-s7">
				{/*Box1*/}
				<div className="flex-column flex-lg-row align-items-center Home-s7-logos">
					<a href="https://www.affordablecustomehr.com/" target="_blank">
						<img src="Img/HomeS7img1.png"/>
					</a>
					<a href="http://americanmedical.com/" target="_blank">
						<img src="Img/HomeS7img2.png" />
					</a>
					<a href="https://support.angeltrack.com/help/biller/clearinghouseuploader.htm" 
					target="_blank">
						<img src="Img/HomeS7img3.png" />
					</a>
					<a href="https://www.aprima.com/" target="_blank">
						<img src="Img/HomeS7img4.png" />
					</a>
					<a href="https://bestfordentistry.com/" target="_blank">
						<img src="Img/HomeS7img5.png" />
					</a>
					<a href="https://www.i3verticals.com/healthcare" target="_blank">
						<img src="Img/HomeS7img6.png" />
					</a>
					<a href="https://www.i3verticals.com/healthcare" target="_blank">
						<img src="Img/HomeS7img7.png" />
					</a>
				</div>
				
				{/*Box2*/}
				<div className="flex-column flex-lg-row align-items-center Home-s7-logos">
					<a href="https://www.affordablecustomehr.com/" target="_blank">
						<img src="Img/HomeS7img8.png"/>
					</a>
					<a href="https://www.greatamerica.com/" target="_blank">
						<img src="Img/HomeS7img9.png" />
					</a>
					<a href="https://www.hfma.org/" target="_blank">
						<img src="Img/HomeS7img10.png" />
					</a>
					<a href="https://www.infogpsnetworks.com/" target="_blank">
						<img src="Img/HomeS7img11.png" />
					</a>
					<a href="https://www.kha-net.org/" target="_blank">
						<img src="Img/HomeS7img12.png" />
					</a>
					<a href="https://www.mgma.com/" target="_blank">
						<img src="Img/HomeS7img13.png" />
					</a>
					<a href="https://www.mhainc.com/home/" target="_blank">
						<img src="Img/HomeS7img14.png" />
					</a>
				</div>
				
				{/*Box3*/}
				<div className="flex-column flex-lg-row align-items-center Home-s7-logos">
					<a href="https://www.micromd.com/" target="_blank">
						<img src="Img/HomeS7img15.png"/>
					</a>
					<a href="https://mppg.net/" target="_blank">
						<img src="Img/HomeS7img16.png" />
					</a>
					<a href="https://www.mpsanet.org/" target="_blank">
						<img src="Img/HomeS7img17.png" />
					</a>
					<a href="https://www.empoweremr.com/" target="_blank">
						<img src="Img/HomeS7img18.png" />
					</a>
					<a href="https://openpractice.net/" target="_blank">
						<img src="Img/HomeS7img19.png" />
					</a>
					<a>
						<img src="Img/HomeS7img20.png" />
					</a>
					<a>
						<img src="Img/HomeS7img21.png" />
					</a>
				</div>
				
				{/*Box4*/}
				<div className="flex-column flex-lg-row align-items-center Home-s7-logos">
					<a href="https://speedysoftusa.com/" target="_blank">
						<img src="Img/HomeS7img22.png"/>
					</a>
					<a href="https://www.platinumsystem.com/" target="_blank">
						<img src="Img/HomeS7img23.png" />
					</a>
					<a>
						<img src="Img/HomeS7img24.png" />
					</a>
					<a href="https://vowhs.com/" target="_blank">
						<img src="Img/HomeS7img25.png" />
					</a>
					<a href="https://www.windriverpayments.com/" target="_blank">
						<img src="Img/HomeS7img26.png" />
					</a>
					<a href="https://www.gorev.com/Partners" target="_blank">
						<img src="Img/HomeS7img27.png" />
					</a>
					<a href="https://www.i3verticals.com/" target="_blank">
						<img src="Img/HomeS7img28.png" />
					</a>
				</div>
			</div>
			<Footer />
		</>
	);	
}
export default Home;