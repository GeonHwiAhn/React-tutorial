import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MemberList from './MemberList';
import UserList from './UserList';
import TodoList from './TodoList';
// BrowserRouter 타자치기 너무 길기 때문에 Router라는 이름으로 줄이겠다.
// as = alias 약칭, 별칭 Router

function App () {
    return (
    <Router>
        <Routes>
            <Route path="/memberlist" element={<MemberList />} />
            <Route path='/' element={<UserList />} />
            <Route path='/todo' element={<TodoList />} />
        </Routes>
    </Router>
    )
    
}

export default App;

/*
function App () {}
index 다음에 특정 js가 최상위에서 시작할 때 function
function 제일먼저 기능이 되진 않음

function 위에 다른 코드가와도 문제없음

const App () {}
    자신이 js 코드 작성한 페이지에서 최상위
이외에는 모두 const 사용
const 이전에 console.log("hihi"); 나 다른 코드 작성을 지양(사용X)
const로 가장 중점이 되는 코드를 선언해준 다음에
console.log("hihi");
다른 기능을 작성
*/