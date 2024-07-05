import React, {useState} from 'react';

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
                setMessage('다음사람 마시세요. 마셔라 마셔라 마셔라 마셔라 술이들어간다 쭉쭉쭉쭉 언제까지 어깨춤을 추게할거야 내어깨를봐 탈골됐잖아 술이들어간다 쭉쭊쭊ㅉ꾸ㅉ꾸ㅉ꾸쭊쭈꾸ㅉㄲ쭈꾸ㅉ꾸ㅉㄲ');
            } else if (userGuess > number) {
                setMessage('다운!');
            } else {
                setMessage('업!');
            }
            //input에 작성된 값 지우기
            setGuess('');
        }
        const handleRestart = (e) => {

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
            <button onClick={handleRestart}>재시작버튼</button>
        </div>
    )
}
export default Game;