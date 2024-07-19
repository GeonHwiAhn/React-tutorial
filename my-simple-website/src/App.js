import "./App.css";
import Game from "./component/Game";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import NavBar from "./component/Layout/NavBar";
import Footer from "./component/Layout/Footer";
/*
Module not found: Error: Can't resolve './component/Header' ==>  에러가 발생한 파일 위치 App.js에서 해당 파일 위치 찾을수없음 이라는 에러 발생
 in 'C:\Users\user1\react-workspace\my-simple-website\src' 
ERROR in ./src/App.js 13:0-40 ===> 에러 발생한 파일 위치
*/
import Header from "./component/Layout/Header";
import GameTwoStep from "./component/GameTwoStep";
import TodoList from "./component/TodoList";
import TicTapToe from "./component/TicTapToe/TicTapToe.js";
import TicTapToeTwoStep from "./component/TicTapToe/TicTapToeTwoStep.js";
import TypingTest from "./component/TypingTest.js";
import MovieRating from "./component/Movie/MovieGrade.js";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes> {/*링크 모음  예전에는 Switch 라고 작성했지만 v6부터 Routes 이름 사용 */}
        <Route path="/"             element =  {   <Home />   } />
        <Route path="/game"         element =  {   <Game />   } />
        <Route path="/game-twoStep" element =  {   <GameTwoStep />   } />
        <Route path="/todoList"     element =  {   <TodoList />} />
        <Route path="/tictaptoe"    element =  {   <TicTapToe/>} />
        <Route path="/ttt-twoStep"  element =  {   <TicTapToeTwoStep/>} />
        <Route path="/TypingTest"   element =  {   <TypingTest/>} />
        <Route path="/movieRate"    element =  {   <MovieRating /> } />
      </Routes>


      <Footer/>
    </div>
  );
}

export default App;