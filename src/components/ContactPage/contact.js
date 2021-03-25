import React from "react";
import Title from "../../components/Title";
export default function contact() {
	return (
		<div className="py-5">
			<div className="row">
				<div className="col-10 mx-10 col-md-6 my-3">
					<Title title="contact us"></Title>
					<form
						action="https://formspree.io/f/xnqlapoz"
						method="POST"
						className="mt-5"
					>
						{/* first */}
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="firstName"
								placeholder="firstName"
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								className="form-control"
								name="email"
								placeholder="email@email.com"
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="subject"
								placeholder="!important"
							/>
						</div>
						<div className="form">
							<textarea
								name="message"
								row="10"
								className="form-control"
							></textarea>
						</div>
						<div className="form-group mt-3">
							<input
								type="submit"
								className=" form-control bg-primary text-white"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
