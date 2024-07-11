import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/game">숫자맞추기 게임</Link> </li>
        <li> <Link to="/todoList">할 일 목록 작성하기</Link> </li>
        <li> <Link to="/tictaptoe">틱탭토 게임</Link></li>
        <li> <Link to="/TypingTest">타자치기대회</Link></li>
        
        {/* 2단계 링크를 NavBar에는 작성하지 않음
            왜냐하면 1단계를 통과해야 2단계 링크를 보여줄 것이기 때문
        */}
      </ul>
    </nav>
  );
};
export default NavBar;