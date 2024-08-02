import React from "react";

const User = ({ user, userList, setUserList, setEditUser }) => {
    /*
    1번과 2번 동일
  1번 : const User = ({ user, userList, setUserList, setEditUser }) => {
  
  2번 : const User = (props) => {
      const user = props.user;
      const userList = props.userList;
      const setUserList = props.setUserList;
      const setEditUser = props.setEditUser;
    */
    const deleteUser = () => {

    const newUserList1 = userList.filter((item) => {return item === user; });
    const newUserList2 = userList.filter((item) =>  item === user );
        //1번과 2번은 동일하지만 {return}의 존재 유무가 다름

      const newUserList = userList.filter((item) => item !== user); 
        
      setUserList(newUserList);
    };
    //return item === user; 내가 선택한 번호  이외 모두 삭제


    return (
     <tr>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{user.phone}</td>
        <td>
          <button onClick={deleteUser}>삭제하기</button>
        </td>
        <td>
          <button onClick={() => setEditUser(user)}>수정하기</button>
        </td>
      </tr>
    );
  };
  
  export default User;