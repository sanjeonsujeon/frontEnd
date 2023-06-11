import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`
const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`

const Title = styled.h1`
  margin-bottom: 20px;
`

const BoardItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  height: fit-content;
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
`

const BoardTitle = styled.h3`
  margin-bottom: 5px;
  text-align: left;
`

const CreateButton = styled.button`
display: inline-block;
margin-right: 10px;
padding: 10px 20px;
background-color: #f0f0f0;
color: #333;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: #ccc;
}
`

function CrawlingTest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('/api/crawling');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
      <h1>Crawled Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}



/*
const CrawlingTest = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/h1crawling'); // API 엔드포인트에 GET 요청
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error occurred while fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Data Display</h1>
      <p>h1: {data.title}</p> {/* API로부터 받은 h1 타입 데이터 표시 }
      <br></br>
      <p>p: {data.p}</p>{/*API로 받은 p타입 데이터 표시}
    </div>
  );
};
*/
export default CrawlingTest;