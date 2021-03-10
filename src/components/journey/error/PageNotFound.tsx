import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Theme } from '@material-ui/core';
import styled from 'styled-components';

/**
 * Local imports
 */
import { AppButton } from '../../widget/button/AppButton';

export default function PageNotFound(_props: any) {
	const navigate = useNavigate();

	return (
		<Box height='var(--main-layout-height)' display='flex' justifyContent='center' alignItems='center'>
			<ContentBox>
				<Heading>Page does not exist!</Heading>
				<BackLink label='GO BACK' height={32} onClick={() => navigate('/')} />
			</ContentBox>
		</Box>
	);
}

/**
 * Styled Components ...
 */
const Heading = styled.h2`
	color: ${(props: { theme: Theme }) => props?.theme?.palette?.primary?.main};
`;
const BackLink = styled(AppButton)`
	width: 160px !important;
	margin-top: 12px;
`;
const ContentBox = styled(Box)`
	width: 340px;
	display: grid;
	gap: 12px;
	justify-items: center;
`;
