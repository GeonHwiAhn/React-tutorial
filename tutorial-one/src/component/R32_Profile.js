import React, {useState} from 'react';
import './R32_Profile.css';

const 프로필 = () => {
    const [선택한이미지, set선택한이미지] = useState(null);
    
    const 이미지변경하기 = (event) => {
        const file = event.target.files[0]; 
        //추후 이미지 다중선택이 가능할 때 이미지 순서대로 가지고 올 것
        //파일은 모두 파일들이라는 전제하에 파일을 선택하기 때문에
        //하나의 이미지를 선택할 때는 첫번째 자리 (index = 0) 인 0번째 사진을 갖고오겠다.
        if(file) { //만약에 이미지파일이 존재한다면
            const reader = new FileReader(); //파일 읽기모드 준비
            reader.onloadend = () => { //파일 읽기가 완료되었을 때 실행될 함수를 표현
                //set선택한이미지 = 읽어온 파일데이터를 선택한이미지에 변경
                //reader.result = 파일의내용
                //(이미지를 컴퓨터용어로 작성된 코드를 주소값으로 변경한 데이터주소(URL))
                set선택한이미지(reader.result);
            };
            reader.readAsDataURL(file); 
            //readAsDataURL 기능 : 데이터 URL 글자취급해서 읽기 시작
            //주소는 String 문자열로 표현
        }
    }
    
    return (
        <div className='profile-container'>
        <h1> 프로필사진 변경 </h1>
        {/* accept='image/*' 이미지파일 jpg png gif ...과 같은 이미지 확장자만 허용 */}
        <label htmlFor='imgSelect' >사진선택하기</label> <br/>
        <input type='file' id='imgSelect' accept='image/*' onChange={이미지변경하기} />
        {/* 만약에 선택한 이미지가 존재한다면 이미지 미리보기를 제공 */}
        {선택한이미지 && (
            <div>
                <h2>미리보기</h2>
                <img src={선택한이미지} />
            </div>
        )}
        </div>
    )
}
export default 프로필;