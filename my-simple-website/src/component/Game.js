import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
        // 맞출 숫자를 입력하는 guess
        const [guess, setGuess] = useState('');
        // 메세지 = 맞췄는지 틀렸는지 전달하는 메세지
        const [message, setMessage] = useState('');
        // 랜덤으로 1~10까지 숫자 출력하기 (= 사용자는 이 숫자를 맞춰야 함)
        // Math.random() 랜덤으로 0.0~ 1.0 사이의 정수가 아닌 실수를 출력
        // 0에서부터 9까지 출력이기 때문에 +1을 해서 1부터 10까지로 변경
        const [number, setNumber] = useState(Math.floor(Math.random() * 100) +1);
        // 숫자 맞추려고 시도한 횟수 처음에는 숫자를 맞추려고 시도한 적이 없기 때문에 0
        const [attempts, setAttempts] = useState(0);

        // 사용자가 정답을 확인하면 다음단계로 이동하는 버튼이 보이게 생성
        const [isCorrect, setIsCorrect] = useState(false); //정답확인 전이라 false

        // 사용자가 숫자를 맞추려고 시도할 때마다 숫자를 새로 세팅해서 저장해놓기
        const handleChange = (e) => {
            setGuess(e.target.value);
        }
        //<input type='number' value={guess} onChange={handleChange} placeholder='1에서 100사이의 숫자 입력하기'/>
        //<input type='number' value={guess} onChange={(e)} => setGuess(e.target.value); placeholder='1에서 100사이의 숫자 입력하기'/>


        const handleSubmit = (e) => {
            e.preventDefault(); //인터넷이 가지고 있는 기본 동작을 일단 방지하는 역할
            //submit 데이터를 서버로 전송하거나 페이지가 다시 실행되는것을 막아줌
            const userGuess = parseInt(guess, 10); // 혹시나 문자로 된 숫자가 아닌 문자열일 수 있기 때문에 문자열을 정수로 변환
            //const userGuess = parseInt(숫자값, 진수친구들); 진수친구들 = 10진수
            // userGuess = 사용자가 입력한 값을 숫자로 사용할 수 있음

            setAttempts(attempts + 1); //맞추려고 작성한 숫자를 제출할때마다 제출시도횟수 1씩 증가

            //만약에 숫자를 맞췄다면?
            if(userGuess === number) {
                setMessage('어 마자 정답!');
                setIsCorrect(true);
            } else if (userGuess > number) {
                setMessage('다운!');
            } else {
                setMessage('업!');
            }
            //input에 작성된 값 지우기
            setGuess('');
        }
        const handleRestart = () => {
            //게임을 다시 시작하기 버튼을 누르면 랜덤숫자를 다시 생성하고 
            const newNumber = Math.floor(Math.random() * 10) +1;
            //모든 값 초기화
            setNumber(newNumber); //맞춰야할 숫자 새로 집어넣기
            setAttempts(0);       //맞추기위해 시도한 횟수 0으로 초기화
            setMessage('');       //틀렸습니다. 맞췄습니다. 표시 없애주기
            setGuess('');         //input 안에 작성한 숫자도 모두 지워주기
            setIsCorrect(false);  //사용자가 정답 확인 전 상태로 되돌리기
        }
    return(
        <div>
            <h1>숫자맞추기 게임</h1>
            <form onSubmit={handleSubmit}>
                <input type='number'
                       value={guess}
                       onChange={handleChange}
                       placeholder='1에서 100사이의 숫자 입력하기'
                />
                <button type='submit'>추측하기</button>
            </form>
            {/* message = 숫자를 맞췄는지 틀렸는지 확인하는 메세지 */}
            <p>{message}</p>

            {/*자바스크립트에서 제일 많이쓰는 if문은 삼항연산자
                여기에표시한내용? true일 때 실행할 내용 : false일 때 실행할 내용
                true나 false 에서 실행할 내용이 많으면 ()괄호로 묶어서 표현
            */}

            {isCorrect  ?  
            (<Link to="/game-twoStep"><button>다음단계로 이동</button></Link>)   
            :  
            (<button onClick={handleRestart}>재시작버튼</button>) }

            
        </div>
    )
}
export default Game;