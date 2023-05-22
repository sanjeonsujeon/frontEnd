import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BodyContent = styled.div`

`
const MainBanner = styled.div`
	margin-top: 20px;
`
const MainContent = styled.div`

`
const GalleryContent = styled.div`

`
const Main = (props) => {

    const navigate = useNavigate();

	return (
		<>
			<BodyContent>
				<MainBanner>
					<img src="https://via.placeholder.com/690x390" alt="샘플이미지"></img>
					<img src="https://via.placeholder.com/490x390" alt="샘플이미지"></img>
				</MainBanner>
				<MainContent>
					<img src="https://via.placeholder.com/335x390" alt="샘플이미지"></img>
					<img src="https://via.placeholder.com/335x390" alt="샘플이미지"></img>					
					<img src="https://via.placeholder.com/335x390" alt="샘플이미지"></img>
				</MainContent>
				<GalleryContent>
					<img src="https://via.placeholder.com/230x170" alt="샘플이미지"></img>
					<img src="https://via.placeholder.com/230x170" alt="샘플이미지"></img>
				</GalleryContent>
			</BodyContent>
		</>
	);
};

export default Main;