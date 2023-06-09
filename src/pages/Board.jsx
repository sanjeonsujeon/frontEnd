import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 800px;
    margin: 0 auto;
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 10px;
`;

const Board = () => {
    const navigate = useNavigate();
    const [data, setData] = useState('');

    useEffect(() => {
        const getBoardList = async () => {
            console.log('getBoardList()');
            try {
                const response = await axios.get('/api/board-list');
                console.log('main/response: ', response);
                setData(response.data.data);
            } catch (error) {
                console.log('Error fetching board list:', error);
            }
        };
        getBoardList();
    }, []);

    const handleCreateBoard = () => {
        navigate('/createboard');
    };

    return (
        <Container>
            <Title>게시판</Title>
            <ListContainer>
                {data &&
                    data.map((item) => (
                        <ListItem key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </ListItem>
                    ))}
            </ListContainer>
            <button onClick={handleCreateBoard}>글쓰기</button>
        </Container>
    );
};

export default Board;
