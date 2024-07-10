import { useState } from "react";
import './TodoList.css';
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
  
    // addTodo라는 기능이 들어간 버튼을 클릭하면
    const addTodo = () => {
        //todos기본으로 아무런 리스트가 없는 빈 배열이 존재
        //setTodos로 기본으로 아무런 리스트가 없는 목록에 새로운 목록 하나씩 추가하는 것을 진행
        //    [...todos] = 기존에 있던 리스트를 복사해서
        //    value 값이 input 으로 들어온 value 값을 text 라는 키에 저장 
        //    completed = 무언가를 끝내다 라는 영어
        //   할 일 추가 = 끝내야 하는 일
        //    completed : false 새로 추가된 일은 아직 완료하지 않은 일이기 때문에 false
        //    completed : false 내 할일을 완료하지 않았음의 표시
        setTodos([...todos, { text: input, completed: false }]); 
        //setTodos([[...todos], { text: input, completed: false }]); 
        // 이중 배열로 배열이 한 층 더 감싸져 있기 때문에 값이 제대로 목록에 들어가지 않음
        setInput('');
    };

    // 할 일을 완료하면 완료 처리를 해주는 버튼 실수로 완료 처리를 했을 경우
    // 한 번 더 클릭해서 미완료 처리로 변경할 수 있음
    const toggleTodo = (index) => {
      const newTodos =[...todos]; // 어떤 행동을 진행하기 전에 [...todos] 로 복사본을 만들어서 진행 
      newTodos[index].completed = !newTodos[index].completed;
      // 새로운목록[] 자동으로 목록마다 주어지는 숫자에 있는 완료된(completed) 값을 가져와서
      // 사용자가 선택한 index 위치의 completed(완료/미완료) 값을 
      // 완료상태면 미완료 상태로 변경하고, 미완료 상태면 완료 상태로 변경하겠다.
      //    newTodos[         index      ].completed  = !newTodos[index].completed
      // 새로운목록들[사용자가선택한목록번호].완료/미완료 =  완료->미완료 , 미완료->완료로 상태 변경
      // !를 이용해서 boolean(true / false) 값을 (false / true) 값으로 변경할 수 있음
      setTodos(newTodos); //상태가 변경된 목록을 다시 저장
    };
  
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <div>
          <input className="todo-input"
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="새로운 할 일을  추가하세요."
          />
          <button className="todo-button" onClick={addTodo} >할 일 추가하기</button>
        </div>
        {/* 
        할 일이 추가되면 추가된 목록을 system.out.print 와 같은 map을 이용해서 
        사용자 눈에 추가된 목록을 보여주기
        각 목록은
        <li key={목록리스트번호순}> {목록번호에 맞고, value=input에 작성한 text를 보여줌} </li>
        우리가 li 태그를 클릭할 때마다 할 일을 완료했는지, 미완료인지 눈으로 확인할 수 있게 표기
        표기를 할 때 style 태그를 이용해서 표기
        textDecoration = 밑줄
        만약에 할 일이 true 이면 line-through
               할 일이 false 이면 none 이용해 줄 삭제 
        line-through = 중간에 줄긋기
        overline     = 글자 위에 선을 만듬
        underline    = 글자 아래에 선을 만듬 a 태그에 기본값으로 들어있는 line
        */}
        <ul className="todo-ul" >
          {todos.map((todo, index) => (
            <li className="todo-li" 
              key={index} 
              style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none', 
                cursor: 'pointer' 
              }}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;
  
  /*
  추후 useEffect 사용해서 웹사이트를  새로고침(F5) 하더라도 목록이 남아있을 수 있도록 업데이트 !
  */