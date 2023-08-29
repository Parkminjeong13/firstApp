
import { useState } from 'react';
import './App.css';
import Content from './companents/Content';
import Nav from './companents/Nav';

// function Content(props){
//   console.log(props)
//   let Title = ["쌍둥이 아기판다", "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"]
//   let Desc = ["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"]
//   return(
//   <div className='content-item'>
//     <img src="https://via.placeholder.com/320" alt="테스트" />
//     <h3>{Title[props.arrayNum]}</h3>
//     <p>{Desc[props.arrayNum]}</p>
//     <p>{props.desc2}</p>
//   </div>
//   )
// }


function App() {


  
  // 앞에는 값이 들어가고 뒤에는 함수 > 함수로 해당 값 변경 가능
  // let Name = "박민정";
  

  return (
    <div className="App">
      <Nav />
      {/* <h3 className={Name} style={{color: "orange"}}>Hello React {Name}</h3> */}
      <div className='content'>
        <Content arrayNum = "0" />
        <Content arrayNum = "1" />
        <Content arrayNum = "2" />
        <Content arrayNum = "3" />
      </div>
      <div className='content'>
        <Content title="쌍둥이 아기판다" desc="스페셜 이벤트" desc2="테스트1" arrayNum = "0" />
        <Content title="쌍둥이 아기판다" desc="이름을 지어주세요" desc2="테스트2" arrayNum = "1" />
        <Content title="주토피아 동물 아카데미" desc="판다는 곰이 맞을까?" desc2="테스트3" arrayNum = "2" />
        <Content title="귀엽게 찰칵!" desc="에버랜드 AR필터" desc2="테스트4" arrayNum = "3" />
      </div>
    </div>
  );
}

export default App;
