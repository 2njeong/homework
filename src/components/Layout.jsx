import React, { useState } from "react";

// 카드마다 유니크한 id 생성, App과 독립적이어야 함
let id = 1;
const generateId = () => id++;

function Layout({ workingList, setWorkingList }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleTarget = (e) => {
    setTitle(e.target.value);
  };

  const contentTarget = (e) => {
    setContent(e.target.value);
  };

  const addCardBtn = () => {
    const newWorkTodo = {
      id: generateId(),
      todoTitle: title,
      todoContent: content,
      isDone: false,
    };
    if (title && content) {
      const newWorkingList = [...workingList, newWorkTodo];
      setWorkingList(newWorkingList);
      localStorage.setItem("Working", newWorkingList);
    }
    if (!title) {
      alert("제목을 입력해주세요");
    }
    if (!content) {
      alert("내용을 입력해주세요");
    }

    setTitle("");
    setContent("");
  };

  return (
    <header className="MytodoList">
      <h1>My todo List</h1>
      <div className="inputbox">
        제목 : &nbsp;
        <input value={title} onChange={titleTarget} className="title"></input>
        &nbsp; 내용 : &nbsp;
        <input
          value={content}
          onChange={contentTarget}
          className="content"
        ></input>
        &nbsp;&nbsp;
        <button className="add" onClick={addCardBtn}>
          추가하기
        </button>
      </div>
    </header>
  );
}

export default Layout;
