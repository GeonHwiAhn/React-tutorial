import React, {useState} from 'react';
import './App.css';
import './App.js';

function UserList() {
  //유저 초기 목록과 유저가 추가될 목록을 담을 변수명을 설정
  const [users, setUsers] = useState([]); 
  const [name, setName] = useState(null);
  // useState(''); useState(""); useState(null);
  // 모두 초기값이 아무것도 없는 상태
  // 빈 배열인 상태 useState([]); = 목록이 비어있음

  //초기 변수 users가 아무런 유저 목록을 담고있지 않기 때문에 users = []; 빈 배열로 설정

  
  //const 추가버튼 = () ={} //return 존재

  
  //const 추가버튼 = () =() //return 없음


  /*
  1.
   const 기능 = () => {
    return 리턴값; //return 구문이 필수가 아니고, 작성할 수 있다는 의미
  }
  => public 자료형 추가버튼 {
          return 자료형 "자료값"; 
  }


  2.
   const 기능 = () =(
    //return 없음
  )
  => public void 추가버튼 {
   System.out.println("안녕하세요");
  }


  =====================

  1.
  const 인사기능 = () => {
    const 인사메세지 = "안녕하세요.";
    return 인사메세지;
  }
  2.
  <p>{인사기능}</p>

  const 인사기능 = () => (
    alert("좋은아침입니다~!");
  )
  */

  /*
   <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
   <button                         onClick ={( ) => 삭제버튼}>삭제하기</button>

   e = 특정 변화는 값이나 변화가 있는 것을 감지
   button의 경우 버튼을 클릭하기만 하고, 특정 값이 랜덤으로 설정되는 부분이 없기 때문에
   버튼에서는 e와 같은 변수명을 생략

   input의 경우 사용자가 어떤 값을 작성할지 컴퓨터가 모르기 때문에
            사용자가 어떤 값을 입력한다는 것을 이벤트로 받아들이고, 이벤트가 감지되면 value값을 가져옴
  */

  const 추가버튼 = () => {
    setUsers([...users, name]); //...기존유저목록, 
    setName(''); //button 클릭 후 input창 비우기
  }


  //filter = 배열에서 결과가 true 값만 반환
  const 삭제버튼 = (index) => {           
                        //users에 있는 유저 목록 user = 유저명, i = users에 있는 유저가 저장된 번호
    const 삭제후유저목록 = users.filter(        (user,i)      =>    i   !==   index );

    /*
    const 삭제후유저목록 = users.filter((user,i) => i   !==   index );
    ↑ 삭제하기를 선택한 번호 1개만 삭제
    ↓ 삭제하기를 선택한 번호 이외 모든번호 지우기
    const 삭제후유저목록 = users.filter((user,i) => i   ===   index );
    
    /*
    users.filter( (user,  i                  )      =>    i             !==   index );
      유저목록들  유저명, 각 유저가 가입한번호 )      => 배열에저장된번호   같지않은 유저번호만 삭제하려고 누른 번호가
      유저목록에 넣어주겠다.
    */
    setUsers(삭제후유저목록); //유저목록 교체하기
  }

  return (
    <div className='App'>
      <h1>유저 리스트</h1>
      <h3>유저 추가하기</h3>
      <input type='text' 
              value={name}
              onChange={(e) => setName(e.target.value)}
                                  //이벤트. 목표 . 값
      />
      <button onClick={추가버튼}>추가하기</button>
      <h3>유저 리스트 목록보기</h3>
      <pre><li>인덱스         -       유저명</li></pre>
      {users.map( (users, index) => (
        <li key={index}>
          {index} - {users}
          <button onClick={ () => 삭제버튼(index)}>삭제하기</button>
          </li>
      ) )}
      {/*
      {[..."ㅇㅇㅇ", "ㅅㅅㅅ", "ㅁㅁㅁ" ].하나씩모두꺼내기( (꺼낼유저, 고유번호) => (
        <li key={회원가입고유번호}>{꺼낸유저}</li>
      ) )}
      */}
    </div>
  );
}

export default UserList;
