import React, { useState } from 'react'

function Content(props) {
//   console.log(props)  
  let [good, setGood] = useState(0)

  let [title, setTitle] = useState(["쌍둥이 아기판다", "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"]);
  let [desc, setDesc] = useState(["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"])

  function goodFun(){
    setGood(good+1)
    // 원본 값인 good에서 값을 1씩 더함
  }
  function Change(){
    let copy = [...title];
    // 원본 배열 그대로 두고 복사본 사용
    copy[0] = "쌍둥이 아기판다20"
    setTitle(copy)
    let copy2 = [...desc]
    copy2[0] = "스페셜 20"
    setDesc(copy2)
  }
  let [modalChk, setModalChk] = useState(false)
    //앞의 값은 비교하는 것 , 바꿔야 되는 값은 뒤에값   
  function Modal(){
    // if문으로 먼저 해보기 > 삼항연산자로 바꾸기
    // setModalChk(true)
    // (modalChk === true ? setModalChk(false) : setModalChk(true))
    setModalChk(!modalChk)
    // modalChk 가 true 일 때는 false, false일 때는 true로 변경
    // 반대되는 값 변경
  }
  return (
    <>
        <div className='content-item' onClick={Modal}>
            <img src="https://via.placeholder.com/320" alt="테스트" />
            <h3 className='font-bold text-2xl my-1 text-green-500'>{title[props.arrayNum]}</h3>
            <p>{desc[props.arrayNum]}</p>
            <p onClick={goodFun}>👍 {good}</p>
            <button onClick={Change}>수정</button>
        </div>
        {
            (modalChk === true && <div className='window' onClick={Modal}></div>)
        }
    </>
  )
}

export default Content