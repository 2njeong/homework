import React, { useState } from "react";
import WorkingTodo from "./components/WorkingTodo";
import Donetodo from "./components/DoneTodo";
import "./App.css";

// 카드마다 유니크한 id 생성, App과 독립적이어야 함
let id = 1;
const generateId = () => id++;

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [workingList, setWorkingList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  localStorage.setItem("Working", JSON.stringify(workingList));
  localStorage.setItem("Done", JSON.stringify(doneList));

  const titleTarget = (e) => {
    setTitle(e.target.value);
  };

  const contentTarget = (e) => {
    setContent(e.target.value);
  };

  //---------------------------------------------------Working list---------------------------------------------------//

  const addCardBtn = () => {
    const newWorkTodo = {
      id: generateId(),
      todoTitle: title,
      todoContent: content,
      isDone: false,
    };

    const newWorkingList = [...workingList, newWorkTodo];
    setWorkingList(newWorkingList);

    setTitle("");
    setContent("");

    localStorage.setItem("Working", newWorkingList);
    alert("할 일이 저장되었습니다.");
  };

  const deleteCard = (id) => {
    const deletedCardIndex = workingList.findIndex((todo) => id === todo.id);

    const newArr = [...workingList];
    newArr.splice(deletedCardIndex, 1);
    setWorkingList(newArr);

    localStorage.setItem("Working", JSON.stringify(newArr));
    alert("할 일이 삭제되었습니다.");
  };

  const doneBtn = (id) => {
    const restList = workingList.filter((todo) => id !== todo.id);
    setWorkingList(restList);

    const foundCard = workingList.find((todo) => id === todo.id);
    const doneCard = { ...foundCard };
    doneCard.isDone = true;

    const newDoneList = [...doneList, doneCard];
    setDoneList(newDoneList);
    localStorage.setItem("Done", JSON.stringify(newDoneList));
    alert("할 일을 완료하셨군요! 다음 할 일도 화이팅:)");
  };

  //-------------------------------------------Done List-------------------------------------------------------//

  const deleteDoneCard = (id) => {
    const afterDeleteArr = doneList.filter((todo) => id !== todo.id);
    setDoneList(afterDeleteArr);

    alert("todolist에서 완전히 삭제하시겠습니까?");
    localStorage.setItem("Done", afterDeleteArr);
  };

  const cancelCard = (id) => {
    const canceledCard = doneList.find((todo) => id === todo.id);
    canceledCard.isDone = false;

    const againWorkingList = [...workingList, canceledCard];
    setWorkingList(againWorkingList);
    localStorage.setItem("Working", againWorkingList);
    alert("좀 더 열심히 화이팅!");

    const afterCancelList = doneList.filter((todo) => id !== todo.id);
    setDoneList(afterCancelList);
  };

  return (
    <div className="App">
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

      <body className="WorkCards">
        <div>
          <h1 id="text">Working ✍🏼</h1>
        </div>
        <div className="Working">
          {workingList.map((work) => {
            if (!work.isDone) {
              return (
                <WorkingTodo
                  key={work.id}
                  work={work}
                  deleteCard={deleteCard}
                  doneBtn={doneBtn}
                />
              );
            } else {
              return null;
              // 명시적으로 아무것도 그려지지 않도록
            }
          })}
        </div>
        <div>
          <h1 id="text">Done 🙌🏻</h1>
        </div>
        <div className="Done">
          {doneList.map((done) => {
            if (done.isDone) {
              return (
                <Donetodo
                  key={done.id}
                  done={done}
                  deleteDoneCard={deleteDoneCard}
                  cancelCard={cancelCard}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </body>
    </div>
  );
}

export default App;
