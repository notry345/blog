/* eslint-disable */
// import React, { useStaet } from 'react'
import logo from './logo.svg';
import './App.css'; // 여기서 스타일링
import { useState } from 'react';

function App() { // JS 함수 문법


  let [title, title변경] = useState(['오늘의 기분', '우동 맛집', '저녁 메뉴 추천']); // ES6 destructing 문법
  let [like, like변경] = useState(0);

  let posts = 'Thoughts' // 데이터 바인딩을 위해 변수에 데이터 저장

  function title바꾸기(){
    var newTitle = [...title]; // deep copy
    newTitle[0] = '내일의 기분'
    title변경(newTitle);
  }


  return (
  // JSX : 리액트에서 사용하는 HTML 대용 문법
    <div className="App">
      <div className="black-nav">
        <div style={{color: 'pink', fontSize: '30px'}}>내 Blog</div>
      </div>
      <button onClick={ title바꾸기 }>버튼</button>
      <div className="list">
        <h3> { title[0] } <span onClick={ ()=>{ like변경(like+1) } }>👍🏻</span> { like } </h3>
        <p>6월 5일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>6월 5일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>6월 5일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>
    </div>
  );
}

// Component 만들기

function Modal() {
  return(
    <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
