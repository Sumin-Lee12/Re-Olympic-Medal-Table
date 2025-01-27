import { useState } from 'react'
import './App.css'
import MedalForm from "./components/MedalForm"

function App() {

  const [medals, setMedals] = useState([]);
  const [sortType, setSortType] = useState("gold");

  const handleDelete = (country) => {
    const updatedMedals = medals.filter((medal) => medal.country !== country)
    return updatedMedals
  };

  return (
    <>
      <div className='app'>
        <h1 className='title'>파리 올림픽 메달 트래커!</h1>
        <MedalForm medals={medals} setMedals={setMedals}/>
      
        <ul className='medal-list'>
          {medals.map((medal) => {
            return (                  // 삭제 버튼이 작동 안됌....왜지...?
            <li key={medal.country}>
              <span>{medal.country}</span>
              <span>🥇 {medal.gold}</span>
              <span>🥈 {medal.silver}</span>
              <span>🥉 {medal.bronze}</span>
              <button onClick={() => handleDelete(medal.country)}>삭제</button> 
            </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App



//-------------sorting하는 거 못함...ㅠ
  // const getSortedMedals = () => {
  //   if (sortType === "gold") {
  //     const sortedMedals = medals.sort((a, b) => b.gold - a.gold);
  //     return sortedMedals;
  //   } else {
  //     const sortedMedals = medals.sort((a, b) => (b.gold + b.silver + b.bronze) - (a.gold + a.silver + a.bronze));
  //     return sortedMedals;
  //   }
  // }
//---------------return 
  {/* 
        <div>
          <label>
            <input 
              type="radio" 
              value="gold"
              checked={sortType === "gold"}
            />
            금메달 순
          </label>
          <label>
            <input 
              type="radio" 
              value="total"
              checked={sortType === "total"}
            />
            총 메달 순
          </label>
        </div> */}