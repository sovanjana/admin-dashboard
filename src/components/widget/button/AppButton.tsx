import React from 'react';
import styled from 'styled-components';
import { CircularProgress, Button, ButtonProps, Icon } from '@material-ui/core';

export function AppButton(props: IAppButtonProps) {
	const { height, label, add, loading, children, disabled, ...rest } = props;
	const progressHeight = height ? height - 4 : 24;

	StyledButton.defaultProps = {
		color: 'primary',
		variant: 'contained',
	};
	add && Object.assign(rest, { startIcon: <AddIcon>add_circle</AddIcon> });
	height && Object.assign(rest, { height });

	/**
	 * @todo add backdrop incase we want a backdrop while loading is true ...
	 * need more discussion on it ...
	 */
	return (
		<StyledButton disabled={loading || disabled} {...rest}>
			{label ? label : children}
			{props.loading && <StyledCircularProgress size={progressHeight} />}
		</StyledButton>
	);
}

/**
 * Interfaces ...
 */
export interface IAppButtonProps extends ButtonProps {
	height?: number;
	label?: string;
	add?: boolean;
	loading?: boolean;
}

/**
 * Styled Components ...
 */
const AddIcon = styled(Icon)`
  	font-size: 24px !important;
`;
const StyledButton = styled(Button) <IAppButtonProps>`
 	&& {
		position: relative;
		width: ${props => (props.fullWidth ? '' : 'max-content')};
		${props => !props.size && props.height && `
			height: ${props.height}px;
			padding: 0 12px !important;
		`};
		display: inline-flex !important;
		align-items: center !important;
		justify-content: center !important;
		&:not(:first-of-type) {
			margin-left: 6px !important;
		}
	}
`;
const StyledCircularProgress = styled(CircularProgress)`
  	&& {
		position: absolute;
		top: 50%;
		left: 50%;
		${(props: { size: number }) => `
			margin-top: ${-(props.size / 2)}px;
			margin-left: ${-(props.size / 2)}px;
  		`}
  	}
`;
