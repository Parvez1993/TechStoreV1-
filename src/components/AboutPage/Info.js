import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
export default function Info() {
	return (
		<section className="py-5">
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-6 my-3">
						<img
							src={aboutBcg}
							className="img-fluid img-thumbnail"
							alt="about company"
							style={{ background: "var(--darkGrey" }}
						></img>
					</div>
					<div className="col-10 mx-auto col-md-6 my-3">
						<Title title="about us" center="center"></Title>;
						<p className="text-lead text-muted my-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptates quisquam dolorum eum aliquam in quod rem impedit
							laudantium omnis officiis.
						</p>
						<p className="text-lead text-muted my-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptates quisquam dolorum eum aliquam in quod rem impedit
							laudantium omnis officiis.
						</p>
						<button
							className="main-link"
							type="button"
							style={{ marginTop: "2rem" }}
						>
							More Info
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
