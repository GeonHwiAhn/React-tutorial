// node_module 폴더가 보이지 않을 경우 import 자동완성 안됨
import React from 'react';

function useEffectEx() {
    return (
        <> {/* node_module 폴더 유무와 관계없이 전체를 감싸주는 태그가 없으면 빨간줄 발생 */}
            <h1>useEffect란 ?</h1>
        <pre>
            useEffect 함수는 컴포넌트(function, const 시작)가 렌더링(되게 하다, 세워짐) 될 때마다
            특정 작업을 실행할 수 있도록 하는 Hook

            리액트에서 컴포넌트를 렌더링한다 = 리액트에서 ㅇㅇ.js 코드실행 시작한다

        </pre>

        [useEffect] 사용 방법
        import {useEffect} from 'react';
        useEffect(function, deps);
                     ↓       ↓ 
        {/* useEffect(() => {},  []); //function의 이름이나 특정 기능이 없을 때 익명함수로 표현 */}
        function : 00.js를 들어왔을 때 수생하고자 하는 작업
        deps     : 배열 형태로, 벼열 안에는 검사하고자 하는 특정 값, 반배열 작성
                   deps에 특정값을 넣게 되면 컴포넌트가 실행될 때나 지정한 값이 업데이트 될 때
                   useEffect에 적힌 function을 실행
                   필수로 작성해야하는 것이 아님
                   deps를 작성하지 않고, function만 작성해서 사용하면 ㅇㅇ.js를 다시 시작할 때마다
                   useEffect에 작성된 function 함수가 호출

                   
        </>

    )
}

export default useEffectEx;
