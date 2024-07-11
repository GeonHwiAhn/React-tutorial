import React,{useState} from "react";
import Result from './Result';
import './TypingTest.css';

//문제는 타자대회 컴포넌트 바깥으로 옮겨 별개로 사용
const 타이핑문제 = [
    '이젠 혼자가 아닐 무대',
    '너무나 감격스러워',
    '끝없는 가능성중에 날 골라줘서 고마워',
    '나와 맞이하는 미래가 위태로울지도 몰라',
    '하지만 눈물 가득한 감동이 있을지도 몰라',
    '그래도 내손 놓지 않겠다면',
    "if so Then let's go",
    'Welcome to the show!'
   ];
//문제를 5개 만들고 5개 문제가 무사히 돌아가는지 확인 문제는 임의로 작성





//클라이언트가 입력한 값이 일치하는지 확인 후 Result.js 적힌 결과를 보여주는 게임
const 타자대회 = () => {
    const [텍스트입력, set텍스트입력] = useState('');
    const [결과확인, set결과확인] = useState(false);

    const [현재문제번호, 다음문제번호] = useState(0);

    const 현재텍스트 = 타이핑문제[현재문제번호];
    // 타이핑문제 -> 현재텍스프 변경해서 각각의 타이핑문제를 비교할 예정


    const 값변경하기 = (e) => {
        set텍스트입력(e.target.value);

        if(e.target.value === 현재텍스트) { //타이핑문제 -> 현재텍스트
            set결과확인(true);
        }
    }

    const 다음문제로이동 =() => {
        set텍스트입력 (''); //다음문제로 이동할 때 기존에 작성한 정답 지워주기
        set결과확인(false);
        //만약에 2문제 중 1문제라면 다음 문제로 넘어가기
        if (현재문제번호 < 타이핑문제.length -1) { //index가 0부터 시작하기 때문에 length에 -1 해줘야함
            다음문제번호(현재문제번호 +1);
        } else { //만약에 총 2문제중에서 2문제를 모두 맞추면 아래코드 출력하기
            alert ('모두 맞췄습니다!!!');
            다시시작()
        }
    }

    const 다시시작 = () => {
        set텍스트입력(''); //다음문제로 이동할 때 기존에 작성한 정답 지워주기
        set결과확인(false);
        
    }

    return (
        <div className="typing-test">
            <h1>타자치기대회</h1>
            <p>오늘의 문제 : {현재텍스트}</p>
            

            <div className="typing-container">
                <img src="/hancom.jpg" className="character-image"/>
                {/*value = 초기에 빈공간 onChange = 작성한 값 변경 
                disabled = 정답일 때 입력한 값 수정못하게 막아버림 */}
                <textarea
                    value={텍스트입력}
                    onChange={값변경하기}
                    disabled={결과확인}
                />
                {/*변경되지 않는 사진을 넣을 때는 public
                   사진의 특정값을 주기적으로 변경할 때는 src
                   현재는 한 사진을 고정할 것이기 때문에 public
                */}
            </div>
            {/*Result js 파일에 inputText = 텍스트입력과 correctText = 타이핑문제를 전달 */}
            {결과확인 && 
            <Result inputText={텍스트입력} correctText={현재텍스트}/>}

            {결과확인 && <button onClick={다시시작}>다시시작하는 버튼</button>}
            {결과확인 && <button onClick={다음문제로이동}>다음 문제</button>}
        </div>
    )
}

export default 타자대회;