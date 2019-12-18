import React, { useState, useEffect } from 'react';
import './main.scss';
import Block from '../block/block';
import About from '../about/about';
import Expertise from '../expertise/expertise';
import Experience from '../experience/experience';
import Endorsements from '../endorsements/endorsements';
import Contact from '../contact/contact';

function Main() {
	const [scroll,setScroll] = useState(0);
	useEffect(()=>{
		window.addEventListener('scroll', handleScroll);
	},[])
	function handleScroll(){
		setScroll(window.scrollY)
	}
	return (
		<div className="main-content">
			<Block>
				<div className="name-container mx-auto">
					<video autoPlay muted loop className="w-100 backdrop">
						<source src={require('../../assets/Black123.mp4')} />
						Your browser does not support HTML5 video.
					</video>
					<div className="pr-3 pl-3 w-100">
						<h1>M.S SRIRAM</h1>
						<h2 className="title">SOFT SKILLS ENABLER</h2>
						<p>Chennai | India</p>
					</div>
				</div>
			</Block>
			<div className={(scroll > 720)?"background-image":"background-image no-background"}>
				<About />
				<Expertise />
				<Experience />
				<Endorsements />
				<Contact />
			</div>
		</div>
	);
}
export default Main;
