import React from "react";

function App() {
  const students = [
    { id: 1, name: "Alice", age: 17, grade: "A" },
    { id: 2, name: "Bob", age: 18, grade: "B" },
    { id: 3, name: "Charlie", age: 16, grade: "C" },
    { id: 4, name: "Diana", age: 19, grade: "D" },
  ];

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((a) => a.age >= 18);
  console.log(filteredStudents);

  const studentBtn = (adult) => {
    alert(`이 학생의 나이는 ${adult.age}세이며, 점수는 ${adult.grade}입니다.`);
  };

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {" "}
        {/* TODO: map을 사용해서 filteredStudents를 여기에 렌더링하세요. */}
        {/* TODO: 학생이름을 클릭하면 나이와 점수가 alert 돼야 해요.*/}
        {filteredStudents.map((adult) => (
          <button key={adult.id} onlick={() => studentBtn(adult)}>
            {adult.name}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default App;
