import React from "react";

export default function MedalItem({medal, handleDelete}) {
  return (
    <li>
      <span>{medal.country}</span>
      <span>🥇 {medal.gold}</span>
      <span>🥈 {medal.silver}</span>
      <span>🥉 {medal.bronze}</span>
      <button onClick={() => handleDelete(medal.country)}>삭제</button> 
    </li>
  )
}

// 삭제 버튼이 작동 안됌....왜지...?
// 오류나서 연동은 안 했지만 일단 만들어둔 컴포넌트!
