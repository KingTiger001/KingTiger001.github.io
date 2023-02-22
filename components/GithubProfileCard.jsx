import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-3" lg="4">
							<img
								src='/img/profile/photo.png'
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col>
						<Col lg='2' className="order-lg-2"></Col>
						<Col lg="6" className="order-lg-1">
							<h2 className="text-white">Reach Out to me!</h2>
							<p className="lead text-white mt-3">
								DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY
								INBOX IS OPEN FOR ALL
							</p>
							<p className="text-white mt-3">Detail-Oriented</p>
							<p className="text-white mt-3">Passion and Honesty</p>
							<p className="text-white mt-3">Complex Problem Solver</p>
							<p className="text-white mt-3">High Quality</p>
							<p className="text-white mt-3">Fast Learner</p>
							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								Richmond, VA
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
