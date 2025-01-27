import React from "react";
import MedalItem from "./MedalItem";

export default function MedalList({medals, handleDelete}) {
  return (
    <ul className='medal-list'>
      {medals.map((medal) => <MedalItem key={medal.country} medals={medals} handleDelete={handleDelete}/>)}
    </ul>
  )
}

// 오류나서 연동은 안 했지만 일단 만들어둔 컴포넌트!