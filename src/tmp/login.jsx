
  {/* 토큰 체크 api 호출문
  const checkToekn = (page) => {// page 는 현재 접속 하려고 하는 페이지
    const refreshToken = localStorage.getItem('login-refresh-token');
  
    axios.post(`/api/check-token`, {},{
      headers: {
        "refreshtoken" : refreshToken
      }
    })
      .then((response) => {
        if ((response.status === 200)) {
					return console.log("토큰 확인 완료"), navigate(`/${page}`);
				}
      })
      .catch((Error) => {
        console.log(Error)
        alert("다시 로그인 하여 주십시오");
        navigate("/Login");
      })
  }


  
  
  const logout = () => {
    const refreshToken = localStorage.getItem('login-refresh-token');
  
    axios.post(`/api/logout`, {},{
      headers: {
        "refreshtoken" : refreshToken
      }
    })
      .then((response) => {
        if ((response.status === 200)) {
          localStorage.removeItem('login-refresh-token'); 
          console.log(refreshToken);
					return console.log("토큰 확인 완료"), navigate("/Login");
				}
      })
      .catch((Error) => {
        console.log(Error)
        console.log("don't remove token");
        alert("오류가 발생하였습니다.");
      })
  }

  */}