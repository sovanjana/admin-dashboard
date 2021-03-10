import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Redirect(props: any) {
	let navigate = useNavigate();

	useEffect(() => {
		navigate(props?.to);
	});
	return null;
}
