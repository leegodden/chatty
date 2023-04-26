import {
	forwardRef,
	InputHTMLAttributes,
	ChangeEvent,
	MouseEvent,
	FocusEvent,
} from 'react';
import './Input.scss';

type Props = {
	labelText?: string;
	className?: string;
	handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: MouseEvent<HTMLInputElement>) => void;
	onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
	style?: React.CSSProperties;
} & InputHTMLAttributes<HTMLInputElement>;

/* eslint-disable react/display-name */
const Input = forwardRef<HTMLInputElement, Props>(
	(
		{
			labelText,
			value,
			className,
			handleChange,
			onClick,
			onFocus,
			onBlur,
			style,
			...rest
		},
		ref
	) => (
		<div className="form-row">
			{labelText && (
				<label htmlFor={rest.name} className="form-label">
					{labelText}
				</label>
			)}
			<input
				ref={ref}
				onChange={handleChange}
				value={value}
				onClick={onClick}
				onFocus={onFocus}
				onBlur={onBlur}
				className={`form-input ${className || ''}`}
				style={style}
				autoComplete="false"
				{...rest}
			/>
		</div>
	)
);

export default Input;
