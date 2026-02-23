import './footer.css';

function Footer(){
	return(
		<>
			<div className="container-fluid flex-column flex-lg-row align-items-center footer">
				<div className="footer-section1">
					<p className="footer-heading">It's time to <strong>protect</strong> your <br 
					/>bottom line</p>
					<button className="footer-btn">RIGHT THIS WAY</button>
					<div>
						<i className="fa-brands fa-linkedin"></i>
						<i className="fa-brands fa-youtube"></i>
						<i className="fa-brands fa-facebook-f"></i>
						<i className="fa-regular fa-envelope"></i>
					</div>
				</div>
				<div>
					<img src="Img/footer.png" />
				</div>
			</div>
			<div>
				<div className="footer-last">
					<p>EDI Companion Guide</p>
					<p>Resources</p>
					<p>Payer List</p>
					<p>Privacy</p>
				</div>
				<div className="footer-last2">
					<p>
						Etactics, Inc., 300 Executive Parkway West, Hudson, OH, 44236, United 
						<br />States (330) 342-0568 sales@etactics.com
					</p>
				</div>
			</div>
		</>
	);
}

export default Footer;