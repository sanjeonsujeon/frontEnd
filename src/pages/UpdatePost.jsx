import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
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

const UpdatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;
    const oldTitle = location.state.title;
    const oldContent = location.state.content;

    const resetInput = () => {
        setContent("");
        setTitle("");
        document.getElementById('input_title').value = '';
        document.getElementById('textarea_content').value = '';
    }

    const handleInputClick = async (e) => {
        e.preventDefault();
        document.getElementById('input_title').value = '';
        document.getElementById('textarea_content').value = '';
        console.log('writeBoard');
        const requestData = { id, title, content };
        console.log('requestData: ', requestData);
        try {
            const response = await axios.put('/api/update-board', requestData);
            console.log('writeBoard/response: ', response);
            console.log('writeBoard/response.status: ', response.status);
            navigate("/detail", { state: { id } });
        } catch (err) {
            console.log('CreateBoard/handleInput/err: ', err);
            resetInput();
        }
    }

    useEffect(() => {
        console.log('UpdateBoard/useEffect()');
        setTitle(oldTitle);
        setContent(oldContent);
    }, [])

    return (
        <Container>
            <Label htmlFor="input_title">제목</Label>
            <TitleInput
                id="input_title"
                type="text"
                placeholder="수정할 제목을 입력해주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <Label htmlFor="textarea_content">내용</Label>
            <Textarea
                id="textarea_content"
                placeholder="수정할 내용을 입력해주세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <input
                type="button"
                value="게시글 수정"
                onClick={handleInputClick}
            />
        </Container>
    )
}

export default UpdatePost;
