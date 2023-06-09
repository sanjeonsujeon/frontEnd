import styled from "styled-components";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEffect, useState } from "react";
import BoardList from "../Component/BoardList/BoardList";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from "../Component/Button";

  	const BoardContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1200px;
  	margin: auto;
	`
	const ButtonDiv = styled.div`
	margin: 20px auto;
	display: flex; 
  	justify-content: center;
	`

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