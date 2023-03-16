import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const Main = (props) => {

    const navigate = useNavigate();

    const play = () => {
        navigate('/sub');
    };

	return (
		<>
			<h3>Main Page</h3>
			<Button name="Move Sub Page" onClick={play} />
		</>
	);
};

export default Main;