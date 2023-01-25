import React from 'react'
import "./style.css";
import photo from './../assets/myPhoto.png';
import email from './../assets/mail.png';
import linkedin from './../assets/linkedin.png';

const Info = () => {
	return (
		<div>
			<img src={photo} className="mainPhoto" />
			<h1>Nazym Guliyev</h1>
			<p className="prof">Software Engineer</p>
			<p className="website">nazymguliyev.website</p>
			<div className="contacts">
				<a href="mailto:guliyev.n.d@gmail.com" target="_blank" className="email">
					<img src={email} />
					<p>Email</p>
				</a>

				<a href="https://www.linkedin.com/in/nazym-guliyev/" target="_blank" className="linkedin">
					<img src={linkedin} />
					<p>Linkedin</p>
				</a>

			</div>
		</div>
	);
}

export default Info;