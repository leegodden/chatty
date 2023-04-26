import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import './Register.scss';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';

type Props = {};

const Register: React.FC<Props> = (props) => {
	return (
		<div className="auth-inner">
			{/* <div className="alerts" role="alert">
				Error message
			</div> */}
			<form className="auth-form">
				<div className="form-input-container">
					<Input
						id="username"
						name="username"
						type="text"
						value="username"
						labelText="Username"
						placeholder="Enter Username"
						handleChange={() => {}}
					/>
					<Input
						id="email"
						name="email"
						type="text"
						value="tester@tester.com"
						labelText="Email"
						placeholder="Enter Email"
						handleChange={() => {}}
					/>
					<Input
						id="password"
						name="password"
						type="password"
						value="my password"
						labelText="Password"
						placeholder="Enter Password"
						handleChange={() => {}}
					/>
				</div>
				<Button
					label={'SIGNUP'}
					className="auth-button button"
					disabled={true}
				/>
			</form>
		</div>
	);
};

export default Register;
