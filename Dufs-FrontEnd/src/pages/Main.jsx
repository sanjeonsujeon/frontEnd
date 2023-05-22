import React from 'react';
import styled from "styled-components";

const BodyContent = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`
const MainBanner = styled.div`
	margin: 20px 0 0 0;
	width: 100%;
`
const MainContent = styled.div`
	justify-content: space-between;
	margin: 20px 0 0 0;
	width: 100%;
`
const GalleryContent = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px 0 20px 0;
	width: 100%;
`
const GalleryUl = styled.ul`
	list-style: none;
	margin: 0 auto 0 0;
	padding: 0;
`

const StyledImage = styled.img`
  width: ${(props) => props.width || "100%"}; /* 이미지의 가로 크기, 기본값은 100% */
  height: ${(props) => props.height || "auto"}; /* 이미지의 세로 크기, 기본값은 auto */
`;

const Main = (props) => {

	return (
		<>
			<BodyContent>
				<MainBanner>
					<StyledImage
						src="https://via.placeholder.com/740x390"
						alt="샘플이미지"
						width="740px"
						height="390px"
						style={{ marginRight: "20px" }}
					/>
					<StyledImage
						src="https://via.placeholder.com/340x390"
						alt="샘플이미지"
						width="340px"
						height="390px"
					/>
				</MainBanner>
				<MainContent>
					<StyledImage
						src="https://via.placeholder.com/360x390"
						alt="샘플이미지"
						width="360px"
						height="390px"
						style={{ marginRight: "20px" }}
					/>
					<StyledImage
						src="https://via.placeholder.com/360x390"
						alt="샘플이미지"
						width="360px"
						height="390px"
						style={{ marginRight: "20px" }}
					/>
					<StyledImage
						src="https://via.placeholder.com/340x390"
						alt="샘플이미지"
						width="340px"
						height="390px"
					/>
				</MainContent>
				<GalleryContent>
					<GalleryUl>
						<li>
							<StyledImage
								src="https://via.placeholder.com/230x170"
								alt="샘플이미지"
								width="230px"
								height="170px"
								style={{ marginRight: "20px" }}
							/>
							<StyledImage
								src="https://via.placeholder.com/460x170"
								alt="샘플이미지"
								width="490px"
								height="170px"
							/>
						</li>
						<li>
							<StyledImage
								src="https://via.placeholder.com/230x170"
								alt="샘플이미지"
								width="230px"
								height="170px"
								style={{ marginRight: "20px" }}
							/>
							<StyledImage
								src="https://via.placeholder.com/460x170"
								alt="샘플이미지"
								width="490px"
								height="170px"
							/>
						</li>
					</GalleryUl>
				</GalleryContent>
			</BodyContent>
		</>
	);
};

export default Main;