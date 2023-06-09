import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 800px;
    margin: 0 auto;
`;

const Label = styled.label`
    text-align: left;
    display: block;
`;

const TitleInput = styled.input`
    width: 100%;
    font-size: 2rem;
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 500px;
    resize: none;
`;

const CreateBoard = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleInputClick = async () => {
        const requestData = { title, content };

        try {
            const response = await axios.post('/api/create-board', requestData);
            console.log('writeBoard/response: ', response);
            console.log('writeBoard/response.status: ', response.status);

            if (response.status >= 200 && response.status < 400) {
                alert("게시글이 정상적으로 생성되었습니다.");
            } else if (response.status >= 400) {
                alert("게시글 생성이 정상적으로 되지 않았습니다.");
            }

            navigate("/board");
        } catch (error) {
            console.log('CreateBoard/handleInput/err: ', error);
        }
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <Container>
            <Label htmlFor="input_title">제목</Label>
            <TitleInput
                id="input_title"
                type="text"
                placeholder="제목을 입력해주세요"
                onChange={handleTitleChange}
                value={title}
            />

            <Label htmlFor="textarea_content">내용</Label>
            <Textarea
                id="textarea_content"
                placeholder="내용을 입력해주세요"
                onChange={handleContentChange}
                value={content}
            />

            <input
                type="button"
                value="게시글 생성"
                onClick={handleInputClick}
            />
        </Container>
    );
};

export default CreateBoard;
