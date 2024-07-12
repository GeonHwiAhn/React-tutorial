import logo from './logo.svg';
import './App.css'; /* css를 얻어와 아래 작성된 태그 옆에 className으로 적용 */ 
/*
 기본 html에서는 css를 적용할 때 class라는 이름을 사용하지만
 React에서 작성한 html에는 css를 적용할 때 className 이라는 이름을 사용

 css나 다른 js 파일을 가져올 때는 import를 사용

 css를 가져올 떄는
 import 'css경로와 css파일명';

 js를 가져올 때는
 import [여기서사용할 이름] from 'javascript파일경로/javascript파일명';

 R01_ClassComponent.js를 가져와서 App.js에 적용
 R01_ClassComponent.js R01이라는 별칭을 사용해서 App.js 적용
*/
import R01 from './component/R01_ClassComponent.js';
import R02 from './component/R02_FunctionComponent.js';
import Props1 from './component/R03_Prop.js';
import Props2 from './component/R04_Props2.js';
import Props3 from './component/R05_Props.js';
import 예제1번 from './component/R06_State1.js'; //'' "" 크게 상관없음
import 값변경실습 from './component/R07_State2.js';
import 예제2번 from './component/R08.State3.js';
import 예제4번 from './component/R09_State4.js';
import 예제5번 from './component/R10_State5.js';
import 댓글창 from './component/R11_State6.js';
import 컨텍스트1 from './component/R12_Context1.js';
import 컨텍스트2 from './component/R13_Context2.js';
import 부트스트랩예제1 from './component/R14_Bootstrap.js';
import 컨텍스트3 from './component/R15_Context3/Parent.js';
import 멤버가입 from './component/R16_Context4/최종출력공간.js';
import Ref예제1번 from './component/R19_useRef.js';
import Ref예제2번 from './component/R20_userRefInput.js';
import Ref예제3번 from './component/R21_useRefSignUp.js';

//R22_useRefEx -> {RefEx as Ref예제4번}
import {RefEx as Ref예제4번} from './component/R22_useRefEx.js';
import 고블린피하기 from './component/R23_Dodgegobelin/Dodgegobelin.js';
import Axios1 from './component/R25_axios_Ex1.js';
import Axios2 from './component/R26_Axios_Ex2.js';
import Fetch예제1번 from './component/R28_Fetch_ex.js';
import Fetch예제2번 from './component/R29_Fetch_Ex2.js';
import Board from './component/R31_PagiNation/Board.js';
import Album from './component/R31_PagiNationEx/Album.js';
import Pagenation from './component/R31_PagiNationEx2/Board.js';
import Profile from './component/R32_Profile.js';

function App() {

  return (
    /* 
    리액트는 알아서 새로고침을 주기적으로 자주 진행
    주석 : / * * /    -> 설명이나 추가 내용을 작성할 때 사용
          { / * * / } -> 주로 코드를 주석처리할 때 사용
    */
    <div className="App-header">
      {/*<R01/>*/}
      {/*<R02/>*/}
      {/*<Props1 num='1' name='홍길동' age='20' score='90'/>
      <Props1 num='2' name='홍길은' age='30' score='80'/>
      <Props1 num='3' name='홍길금' age='40' score='70'/>
      <h3>Props 예제 2번 사용하기</h3>
      <Props2 name='강감찬' age='72' gender='남자'/>
      */}
      {/*
      <Props2 name='강감찬' age='72' gender='남자'/>

        Props2 객체는 아래와 같은 코드를 한 줄로 작성하기 위해 가져온 이름

      <div className="info">
            이름: 강감찬 / 나이 : 72 / 성별 : 남자
        </div>
      
      <Props3 num='5' name='김연정' age='40' gender='여자' phone='010-1111-2222'/>
      */}

      {/*
      <예제1번 />
      <값변경실습 />
      <예제2번 init="50" step="10" />
      <예제4번 init="40" years="1" />
      */}
      {/*<예제5번/>*/}
      {/*      init = 처음에 시작할 숫자값 step = 몇 씩 숫자가 커지고 작아질 것인가 */}
      {/*<댓글창/>*/}
      {/*<컨텍스트1/>*/}
      {/*<부트스트랩예제1/>*/}
      {/*<컨텍스트2/>*/}
      {/*<컨텍스트3/>*/}
      {/*<멤버가입/>*/}
      {/*Ref예제1번/>*/}
      {/*<Ref예제2번/>*/}
      {/*<Ref예제3번/>*/}
      {/*<Ref예제4번/>*/}
      {/*<고블린피하기/>*/}
      {/*<Axios1/>
      <Axios2/>
      <Fetch예제1번/>
      <Fetch예제2번/>
      <Board/>
      <Album/>
      <Pagenation/>
      */}
      <Profile/>
    </div>
  );
}

export default App;
