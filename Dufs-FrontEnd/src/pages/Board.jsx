import styled from "styled-components";


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function createData(number, title, name, view, date) {
	return { number, title, name, view, date };
  }
  
  	const rows = [
		createData(1,'1번째 게시글','17학번',5,'2023-05-01'),
		createData(2,'2번째 게시글','22학번',7,'2023-04-28'),
		createData(3,'3번째 게시글','20학번',23,'2023-04-24'),
		createData(4,'4번째 게시글','19학번',31,'2023-04-22'),
		createData(5,'5번째 게시글','15학번',67,'2023-04-19'),
		createData(6,'6번째 게시글','23학번',142,'2023-04-18'),
		createData(7,'7번째 게시글','18학번',45,'2023-04-18'),
		createData(8,'8번째 게시글','12학번',79,'2023-04-15'),
		createData(9,'9번째 게시글','17학번',64,'2023-04-14'),
		createData(10,'10번째 게시글','16학번',57,'2023-04-12'),
  	];
	const buttons = [
		<Button key="1">1</Button>,
		<Button key="2">2</Button>,
		<Button key="3">3</Button>,
		<Button key="4">4</Button>,
		<Button key="5">5</Button>
	];

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

const Board = (props) => {
	return (
		<>
			<BoardContent>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="Smaple Board">
					<TableHead>
						<TableRow>
							<TableCell align="left">번호</TableCell>
							<TableCell align="center">제목</TableCell>
							<TableCell align="right">글쓴이</TableCell>
							<TableCell align="right">조회</TableCell>
							<TableCell align="right">날짜</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
							key={row.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
							<TableCell component="th" scope="row">{row.number}</TableCell>
							<TableCell align="center">{row.title}</TableCell>
							<TableCell align="right">{row.name}</TableCell>
							<TableCell align="right">{row.view}</TableCell>
							<TableCell align="right">{row.date}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<ButtonDiv>
				<ButtonGroup size="large" aria-label="large button group">
					{buttons}
				</ButtonGroup>
			</ButtonDiv>
			</BoardContent>
		</>
	);
};

export default Board;