//R26_Axios_Ex2.js 
//axios 이용해서
//https://jsonplaceholder.typicode.com/comments 해당하는 모든 데이터 가져오기
//textarea  칸 들여쓰기 4칸 설정 

//ul li 태그 이용해서 useId id title complated을 리스트마다 담아서 보여주기

import React, {useState, useEffect} from 'react';
import axios from 'axios';
//npm install axios 

const Axios_Ex2 = () => {
    const [comment, setComment] = useState(null); 
    
    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            //무사히 잘 가져왔다면 then으로 data 값 변경6+
            .then(res => {
                setComment(res.comment);
            })
            //가져오는데 실패했다면 에러 보여주기
            .catch( () => {
                alert("데이터를 가져오는데 실패했습니다.");
            });
    },[] );

    return (
        <>
            <h1> json안에 작성된 내용 가져오기</h1>
            <ul>
            {comment.map(comment => (
                <li key={comment.id}>
                    <strong>UserID : </strong>{comment.id} <br/>
                    <strong>Name : </strong>{comment.name} <br/>
                    <strong>Email : </strong>{comment.email} <br/>
                    <strong>Body : </strong>{comment.body} <br/>

                </li>
            ))}
            </ul>
        </>
    )
} 
export default Axios_Ex2;