import React, { useState } from "react";

const MedalForm = ({medals, setMedals}) => {

  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const resetForm = () => {
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingMedal = medals.find((medal) => medal.country === country)
    
    if (!existingMedal) {
      const newMedal = {
        country: country,
        gold: parseInt(gold),
        silver: parseInt(silver),
        bronze: parseInt(bronze),
      }
  
      setMedals([...medals, newMedal]);
      resetForm();
    } else {
      alert("이미 존재하는 국가입니다!")
    }
  };

  const handleUpdate = () => {
    const existingMedal = medals.find((medal) => medal.country === country)
    
    if (existingMedal) {
      const newMedal = {
        country: country,
        gold: parseInt(gold),
        silver: parseInt(silver),
        bronze: parseInt(bronze),
      }
      setMedals([newMedal]); //()안에 꼭! [] 넣기
      resetForm();
    } else {
      alert("업데이트할 국가가 존재하지 않습니다!")
    }
  }

  return (
    <form onSubmit={handleSubmit} className='medal-form'>
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
    <button type='submit'>추가하기</button>
    <button type='button' onClick={handleUpdate}>업데이트</button>
  </form>
  )
}

export default MedalForm;