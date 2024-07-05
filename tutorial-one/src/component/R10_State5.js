import React, {useState} from "react";

/* 1번 자식은 ID를 가진 객체 */
const ID값 = (props) => {
    // handler = 핸들러 = 자동차 운전할때 핸들을 가지고 자동차를 조종하는 것처럼
    // 핸들이라는 이름에는 어떤 값을 조종한다 어떤 값을 처리한다라는 의미가 있읨
    // 코딩에서 핸들이라는것은 값을 조종한다
    const{handler} = props;

    return (
        <div className="wrapper">
            {/*htmlFor = for 속성*/}
            <label htmlFor="inputId">ID : </label>
            {/* onChange = 값이 바뀌었을 때 부모로부터 전달받은 함수 핸들러 수행 */}
            <input type="text" id="inputId" onChange={handler}/>

        </div>
    )
}

const PW값 = ({handler}) => {
    /*
    위에서 
    const ID값 = (props) => {
          const {handler} = props;

    작성한 것과

    const PW값 = ({handler}) => { 

    작성한게 작성법이 다를 뿐 똑같은 표현법
    */
    return(
        <div className="wrapper">
        <label htmlFor="inputPw">Pw : </label>
        <input type="password" id="inputPw" onChange={handler}/>
        </div>
    )
}




const 예제5번 = () => {
    //상태 변수 선언 (State, useState)
    const [id,setId] = useState(''); //맨 처음 빈값으로 넣어줄 때 '' 사용
    const [pw,setPw] = useState('');
    //이벤트        : 동작, 행위 ex)어 오늘 무슨 이벤트 있어? => 어 오늘 무슨 행위 해?
    //이벤트 리스너 : 동작(이벤트) 감지
    //이벤트 핸들러 : 이벤트가 감지됐을 때 수행할 기능

    //id값조종이라는 이벤트 핸들러 기능 설정
    const id값조종 = (e) => { //e = event의 줄임말 = 어떤 동작이나 행동 포착
        setId(e.target.value) 
        //<ID값 handler={id값조종}/> 여기서 값이 변경되는 타겟(target)의 값(value)을 가져오겠다.
    }

    const pw값조종 = (e) => {
        setPw(e.target.value)
    }
    return (
        //props를 이용해 이벤트 핸들러용 함수를 자식 객체(컴포넌트) 에 전달
        <>
        <ID값 handler = {id값조종}/>
        <PW값 handler = {pw값조종}/>
        
        {/* Id, PW가 입력되지 않으면 버튼 비활성화 
        <button disabled={id.length === 0 || pw.length === 0}>
            LOGIN
        </button>
        disabled = 버튼을 클릭하지 못하게 비활성화
        disabled는 버튼 이외 input textarea에서 사용 가능 = 
        */}

        <button disabled={id.length === 0 || pw.length === 0}>
            LOGIN
        </button>
        </>
    )
}

export default 예제5번;