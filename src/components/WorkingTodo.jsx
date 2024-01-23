const WorkingTodo = ({ work, deleteCard, doneBtn }) => {
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
