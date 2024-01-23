const Donetodo = ({ done, deleteDoneCard, cancelCard }) => {
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
