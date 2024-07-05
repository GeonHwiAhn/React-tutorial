import React, { useState } from "react";

import 유저정보전달 from "./유저정보모두저장.js";
import 작성공간 from "./작성공간.js";

// 작성하는 칸을 가져오고 출력도 할 수 있도록 해주는 컴포넌트
const 최종출력공간 = () => {
  const [userList, setUserList] = useState([]);

  return (
    <유저정보전달.Provider value={{ userList, setUserList }}>
      <작성공간 />

      {/* 가입한 유저의 정보를 출력하기 */}
      <div>
        {userList.map((user, index) => {
          return (
            <ul key={index}>
              <li>가입순서 : {index}</li>
              <li>이 름 : {user.inputName}</li>
              <li>번 호 : {user.inputPhone}</li>
            </ul>
          );
        })}
      </div>
    </유저정보전달.Provider>
  );
};

export default 최종출력공간;