const Donetodo = ({
  done,
  doneList,
  setDoneList,
  workingList,
  setWorkingList,
}) => {
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
    <div key={done.id} className="card">
      <h3 id="title">
        {done.todoTitle}
        <br />
      </h3>
      <p2 id="content">{done.todoContent}</p2>
      <br />
      <div className="buttonBox">
        <button className="Btn" onClick={() => deleteDoneCard(done.id)}>
          삭제하기
        </button>
        <button className="Btn" onClick={() => cancelCard(done.id)}>
          취소
        </button>
      </div>
    </div>
  );
};

export default Donetodo;
