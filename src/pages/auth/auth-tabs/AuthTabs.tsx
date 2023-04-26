import React, { useState } from 'react';
import './AuthTabs.scss';
import backgroundImage from '../../../assets/images/background.jpg';
import { Login, Register } from '../index';

type Props = {};

const AuthTabs: React.FC<Props> = (props) => {
	const [type, setType] = useState<string>('Sign In');
	return (
		<>
			<div
				className="container-wrapper"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				<div className="environment">DEV</div>
				<div className="container-wrapper-auth">
					<div className="tabs">
						<div className="tabs-auth">
							<ul className="tab-group">
								<li
									className={`${type === 'Sign In' ? 'active' : ''}`}
									onClick={() => setType('Sign In')}
								>
									<button className="login">Sign In</button>
								</li>
								<li
									className={`${type === 'Sign Up' ? 'active' : ''}`}
									onClick={() => setType('Sign Up')}
								>
									<button className="signup">Sign Up</button>
								</li>
							</ul>

							{/* conditional rendering to show login or Register 
							depending on which tab is clicked */}
							{type === 'Sign In' && (
								<div className="tab-item">
									<Login />
								</div>
							)}
							{type === 'Sign Up' && (
								<div className="tab-item">
									<Register />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AuthTabs;
