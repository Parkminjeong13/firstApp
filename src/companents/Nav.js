import React from 'react'
import "./../Test.scss"
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
      <ul>
        <li><NavLink to="/">이용정보</NavLink></li>
        <li><NavLink to="/about">요금&amp;프로모션</NavLink></li>
        <li><NavLink to="/portfolio">즐길거리</NavLink></li>
        <li><a href="/">요금&amp;프로모션</a></li>
        <li><a href="/">즐길거리</a></li>
        <li><a href="/">멤버십</a></li>
        <li><a href="/">에버랜드 더 알아보기</a></li>
      </ul>
    </div>
  )
}

export default Nav