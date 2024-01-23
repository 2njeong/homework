# 사이트명
My todo List


## 👩‍💻 프로젝트 소개
useState를 사용하여 todolist를 작성하는 사이트 입니다.
![image](https://github.com/2njeong/sparta/assets/154481757/8f80c020-ae93-4566-860b-42e61bc2632b)



## ⏲️ 개발 기간
- 2024.01.22(월)


## 💻 개발환경
- <img alt="React" src ="https://img.shields.io/badge/React-444444.svg?&style=for-the-badge&logo=React&logoColor=react"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScriipt-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> <img alt="Html" src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="Css" src ="https://img.shields.io/badge/CSS-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
- Github
- VScode


## 📌 주요 기능
- Todo 추가 하기
- Todo 삭제 하기
- Todo 완료 상태 변경하기 (완료 ↔ 진행중)


## ✔️ 필수 요구 사항
- 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성
- Todo의 isDone 상태가 true이면, 상태 버튼의 라벨을 취소, isDone이 false 이면 라벨을 완료 로 조건부 렌더링
- Todo의 상태가 Working 이면 위쪽에 위치하고, Done이면 아래쪽에 위치하도록 구현
- Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬
- 반복되는 컴포넌트를 찾아서 분리


## 🧩 컴포넌트
- App
- component
  ㄴ Donetodo.jsx
  ㄴ Worktodo.jsx
  

**Why: 과제 제출시에는 아래 질문의 답변과 함께 제출해주세요.**
1.JSX 문법이란 무엇일까요?
  - Javascript + XML + HTML 문법입니다.
2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이들과 같은 애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요?
  - 리액트의 usestate라는 hook을 사용했습니다.
3. 애플리케이션의 상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요?
  - 부모컴포넌트가 자식컴포넌트에게 데이터를 주고, 데이터는 그 props를 받는 방식으로 공유했습니다.
  - 다른 파일로 아예 분리시킬 시 export, import를 이용했습니다.
4. 기능 구현을 위해 불변성 유지가 필요한 부분이 있었다면 하나만 설명해 주세요.
  - 새로 작성된 카드, 삭제할 카드, 다시 working으로 상태를 변경할 카드를 기존 working 또는 done list에 합하거나 삭제할 때, 불변성 유지를 위해 spread operator를 이용하여 복사했습니다.
5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 컴포넌트로 분리해 보셨나요? 그렇다면 어떠한 이점이 있었나요?
  - 코드의 가독성이 나아졌고, 기존보다 짧아졌습니다.
  - 

## Create React App 만들기 시작 위한 방법
### 프로젝트 생성하기
npx create-react-app 파일명

### 프로젝트 실행하기
#### 프로젝트 폴더로 이동하기
cd '프로젝트 명'

#### 프로젝트 실행하기
npm run start
