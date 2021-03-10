import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { useNavigate } from 'react-router';

/**
 * Local imports
 */
import { AppButton } from '../widget/button/AppButton';
import unexpected_error from '../../assets/empty/unexpected_error.png';
import page_not_found from '../../assets/empty/404_error.png';

interface IErrorPage {
	hasCrashed?: boolean;
	backNavigate?: string;
}

export default function ErrorPage(props: IErrorPage) {
	const navigate = useNavigate();
	const { hasCrashed, backNavigate } = props;

	const [errorMsg, setErrorMsg] = useState("");

	const sendReport = () => {
		if (errorMsg.trim().length) {
			console.error(errorMsg.trim());
		}
		if (hasCrashed) {
			window.location.reload();
		} else {
			if (backNavigate) navigate(backNavigate);
			else window.history.back();
		}
	}

	return (
		<Wrapper>
			<img src={hasCrashed ? unexpected_error : page_not_found} draggable={false} alt='unexpected_error' className='noDataComponent__img mb-12' />
			<Typography color="primary" variant="h5">
				{hasCrashed ? "Oops! Something went wrong!" : "Uh oh! This page doesn't exist!"}
			</Typography>
			<div className="mt-10 mb-10">
				{hasCrashed ? (
					<React.Fragment>
						<div>Looks like we have met with some unexpected error.</div>
						<div>
							Try <span className="color-primary c-pointer" onClick={() => window.location.reload()}> {" refreshing "} </span> the page or leave us some feedback.
            			</div>
					</React.Fragment>
				) : (
					<React.Fragment>
						<div>Its okay. We all get overwhelmed sometimes.</div>
						<div>Click the back button or leave us some feedback.</div>
					</React.Fragment>
				)}
			</div>
			<ErrorMessageInput
				placeholder="Please tell us what happened..."
				value={errorMsg}
				onChange={e => setErrorMsg(e.target.value)}
			/>
			<AppButton label={`Send Report and ${hasCrashed ? "Refresh" : "Go Back"}`} onClick={sendReport} />
		</Wrapper>
	)
}

/**
 * Styled Components...
 */
const Wrapper = styled.div`
	width: 500px;
	height: 600px;
	margin: 50px auto;
	text-align: center;
	img {
		margin: auto;
	}
`;
const ErrorMessageInput = styled.textarea`
	width: 400px;
	height: 130px;
	margin-top: 10px;
	margin-bottom: 10px;
	border-radius: 10px;
	padding: 15px;
`;