import React, {useState} from "react";

const 댓글내용 = (props) => {
    const{handler} = props;

    return (
        <div className="wrapper">

            <label htmlFor="inputComment">댓글 : </label>
            <input type="text" id="inputComment" onChange={handler}/>
        </div>
    )
}

const 작성자 = ({handler}) => {
    return(
        <div className="wrapper">
            <label htmlFor="wirter">작성자 : </label>
            <input type="text" id="wirter" onChange={handler}/>
        </div>
    )
}

const 댓글창 = (props) => {
    //상태변수 선언
    const [comment, setComment] = useState(''); // ''나 아무것도 안써도됨
    const [wirter, setWriter] = useState('');

    const 댓글조종 = (e) => { //e = event의 줄임말 = 어떤 동작이나 행동 포착
        setComment(e.target.value) 
        //<ID값 handler={id값조종}/> 여기서 값이 변경되는 타겟(target)의 값(value)을 가져오겠다.
    }

    const 작성자조종 = (e) => {
        setWriter(e.target.value)
    }
     
    return (
        <>
        {/* 댓글 입력창과 댓글작성창 보여주고 
            댓글과 댓글작성자가 모두 안적혀있으면 버튼 비활성화
            모두 적혀있으면 버튼 활성화
        */}

<댓글내용 handler = {댓글조종}/>
<작성자 handler = {작성자조종}/>

        <button disabled={comment.length === 0 || wirter.length === 0}>
            댓글 입력
        </button>

        </>
    )
}

export default 댓글창;