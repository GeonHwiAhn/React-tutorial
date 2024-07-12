import React, { useEffect, useState } from "react";

const 사진리스트 = () => {
    const [사진들, set사진들] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            return res.json();
        })

        .then(data => {
            // set사진들(data); api주소에 작성된 모든 데이터 가져오기
            // 데이터의 일부분만 가져오길 원한다면 slice를 이용
            // slice(처음가져올범위, 어디까지가져올지마무리하는마무리범위)
            set사진들(data.slice(0, 10)); //데이터 처음~10개 사진만 가져오기
        })
        .catch(err => {
            alert("에러가 발생했습니다." + err);
        })
    },[]);


    return (
        <>
        <h1>사진리스트</h1>
        <ul>
            {사진들.map(사진 => (
                <li key={사진.id}>
                    <img src={사진.thumbnailUrl}/>  
                    <p>{사진.title}</p> 
                {사진.name}</li>
            ))}
        </ul>
        </>
    )
}
export default 사진리스트;