import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";


const Sub = (props) => {

    const navigate = useNavigate();

    const play = () => {
        navigate('/');
    };

	return (
		<>
			<h3>Sub Page</h3>

			<Button name="Move Main Page" onClick={play} />
		</>
	);
};


export default Sub;