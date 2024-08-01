import React from "react";
import UserList from "./UserList";
import TodoList from "./TodoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/" element={<TodoList />} />

          {/* <Link to ="/userlist" /> */}
        </Routes>
      </Router>
    </>
  );
};
export default App;
