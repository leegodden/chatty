import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';
import './Login.scss';

type Props = {};

const Login: React.FC<Props> = (props) => {
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
						id="password"
						name="password"
						type="password"
						value="my password"
						labelText="Password"
						placeholder="Enter Password"
						handleChange={() => {}}
					/>
					<label className="checkmark-container" htmlFor="checkbox">
						<Input
							id="checkbox"
							name="checkbox"
							type="checkbox"
							value=""
							placeholder="Enter Password"
							handleChange={() => {}}
						/>
						Keep me signed in
					</label>
				</div>
				<Button
					label={'LOGIN'}
					className="auth-button button"
					disabled={true}
				/>
				<Link to={'/forgot-password'}>
					<span className="forgot-password">
						Forgot password? <FaArrowRight className="arrow-right" />
					</span>
				</Link>
			</form>
		</div>
	);
};

export default Login;
