const Props3 = (props) => {
    const {num, name, age, gender, phone} = props;

    return(
        <div className="info-ex">
            번호 : {num}
            이름 : {name}
            나이 : {age}
            성별 : {gender}
            핸드폰번호 : {phone}
        </div>
    )
}

export default Props3;