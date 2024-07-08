/*
React Router 링크를 연결해서 이동하기 위해 사용되는 라이브러리

기존 html에서 주소값을 이동할 때 사용한 방법

<a herf="html파일이름.html">이동하기</a>

a 태그로 href를 이용할 경우 html 파일명을 작성해주는 것이기 때문에 React에서는
단순히 a태그와 href만 사용을 할 수 없음

React는 html 파일이 index.html로 한 파일밖에 없기 때문에 단순히 사용할 수 없음

React는 javascript를 이동해서 html 파일을 보여주기 때문에 

react-router-dom 을 사용

라우터(router)란? 종이컵실전화기의 실 역할
* Router = 연결을 해주는데 연결 경로를 자동으로 전화해서 주는 기계
           연결 경로를 자동으로 전환해서 주는 기준은
           고객(클라이언트 = 사용자)이 어떠한 특정 화면이나 기능을 보고자하여
           웹사이트에 요청할 경우 고객이 요청한 흐름대로 자연스럽게 보여주는 기능

1. 설치방법(택1)
    npm install react-router-dom
    npm i       react-router-dom
2. router를 사용하기 위해 4가지 설정
    BrowserRouter : HTML에서 URL 전체 관리자 역할 (History(기록) API 사용)
    Routes        : 링크 모음을 나타내는 표현태그
    Route         : 어떤 링크가 어떤 javascript를 표현하는지 표기해주는 태그
    Link          : 사용자가 누르고 이동할 수 있는 링크 생성 <a href>와 똑같은 역할

3. 사용 방법
    <BrowserRouter> <!-- html에서 이런 링크가 있다 기록을 남김 -->
        <Routes>    <!-- 링크 표현 모음들(모음집) -->
            <Route path="이동할링크" element={ <javascript파일명/> } />
            <!-- / 경로가 Home.js를 바라보길 원한다면 아래와 같이 작성 -->
            <Route path="/" element={ < Home /> } />    <!--맨 위에 Home.js 를 import-->
        </Routes>
    </BrowserRouter>

    *주의사항*
    BrowserRouter는 index.js나 App.js에서 사용
    만약에 App.js를 index.js 바로 아래에서 사용하지 않는다면
    index.js 바로 아래에서 표현되는 js 파일에서 표기

*/