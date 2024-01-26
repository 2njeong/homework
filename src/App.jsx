import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
    { name: "Elmo", age: 20, grade: "E" },
    { name: "Fiona", age: 21, grade: "F" },
    { name: "Gabe", age: 22, grade: "A" },
    { name: "Hannah", age: 23, grade: "B" },
    { name: "Irene", age: 24, grade: "C" },
    { name: "Jenny", age: 25, grade: "D" },
    { name: "Kevin", age: 26, grade: "E" },
    { name: "Linda", age: 27, grade: "F" },
  ]);
  const [filteredStudents, setFilteredStudents] = useState(students);

  // TODO: filterByAge 함수를 작성하세요. 이 함수는 최소나이를 매개변수로 받아 해당 나이 이상인 학생들로 필터링해야 합니다.
  const filterByAge = (minAge) => {
    setFilteredStudents(filteredStudents.filter((stu) => stu.age >= minAge));
  };

  // TODO: filterByGrade 함수를 작성하세요. 이 함수는 특정 학점을 매개변수로 받아 해당 학점의 학생들로 필터링해야 합니다.
  const filterByGrade = (grade) => {
    setFilteredStudents(filteredStudents.filter((stu) => stu.grade === grade));
  };

  // TODO: resetFilter 함수를 작성하세요. 이 함수는 필터를 초기화하여 모든 학생들을 표시해야 합니다.
  const resetFilter = () => {
    setFilteredStudents(students);
  };

  return (
    <div>
      <h1>학생 목록</h1>
      <button onClick={() => filterByAge(24)}>24세 이상</button>
      <button onClick={() => filterByGrade("A")}>A등급</button>
      <button onClick={resetFilter}>필터 초기화</button>
      <ul>
        {filteredStudents.map((student, index) => (
          <li key={index}>
            {student.name} - Age: {student.age}, Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
