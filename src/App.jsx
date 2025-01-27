import { useState } from 'react'
import './App.css'

function App() {

  const [medals, setMedals] = useState([]);
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);


  return (
    <>
      <div className='app'>
        <h1 className='title'>파리 올림픽 메달 트래커!</h1>
        <form className='medal-form'>
          <label className='input-wrapper'>
            국가 이름
            <input 
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder='국가명을 입력해주세요'
            required
            />
          </label>
          <label className='input-wrapper'>
            금메달
            <input 
            type="number"
            value={gold}
            onChange={(e) => setGold(e.target.value)}
            required
            min={0}
            max={99}
            />
          </label>
          <label className='input-wrapper'>
            은메달
            <input 
            type="number"
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
            required
            min={0}
            max={99}
            />
          </label>
          <label className='input-wrapper'>
            동메달
            <input 
            type="number"
            value={bronze}
            onChange={(e) => setBronze(e.target.value)}
            required
            min={0}
            max={99}
            />
          </label>
          <button >추가하기</button>
        </form>
      </div>
    </>
  )
}

export default App
