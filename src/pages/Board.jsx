import * as React from 'react';
import { useEffect, useState } from "react";
import BoardList from "../Component/BoardList/BoardList";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from "../Component/Button";

const Board = () => {
	
    const navigate = useNavigate();

	const [data, setData] = useState("")

	useEffect(() => {
	  const getBoardList = async () => {
		  console.log('getBoardList()');
		  let response = await axios.get("/api/board-list");
		  console.log('main/response: ', response);
		  setData(response.data.data);
	  };
	  getBoardList();
	}, [])

	const btn = () => {
        navigate('/createboard');
    };

	return (
		<>
			<BoardList data={data}/>
			<Button onClick={btn}>글쓰기</Button>
		</>
	);
};


export default Board;