const WorkingTodo = ({
  work,
  workingList,
  setWorkingList,
  doneList,
  setDoneList,
}) => {
  const deleteCard = (id) => {
    if (window.confirm("할 일을 삭제하시겠습니까?")) {
      const deletedCardIndex = workingList.findIndex((todo) => id === todo.id);
      alert("할 일이 삭제되었습니다.");
      const newArr = [...workingList];
      newArr.splice(deletedCardIndex, 1);
      setWorkingList(newArr);

      localStorage.setItem("Working", JSON.stringify(newArr));
    }
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

  return (
    <div key={work.id} className="card">
      <h3 id="title">
        {work.todoTitle}
        <br />
      </h3>
      <p2 id="content">{work.todoContent}</p2>
      <br />
      <div className="buttonBox">
        <button className="Btn" onClick={() => deleteCard(work.id)}>
          삭제하기
        </button>
        <button className="Btn" onClick={() => doneBtn(work.id)}>
          완료
        </button>
      </div>
    </div>
  );
};

export default WorkingTodo;
