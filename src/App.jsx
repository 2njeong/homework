import React, { useState } from "react";
import WorkingTodo from "./components/WorkingTodo";
import Donetodo from "./components/DoneTodo";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  const [workingList, setWorkingList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  localStorage.setItem("Working", JSON.stringify(workingList));
  localStorage.setItem("Done", JSON.stringify(doneList));

  return (
    <div className="App">
      <Layout workingList={workingList} setWorkingList={setWorkingList} />
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
                  workingList={workingList}
                  setWorkingList={setWorkingList}
                  doneList={doneList}
                  setDoneList={setDoneList}
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
                  doneList={doneList}
                  setDoneList={setDoneList}
                  workingList={workingList}
                  setWorkingList={setWorkingList}
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
