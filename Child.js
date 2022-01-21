import React from 'react'
function Child({data}) {
    const Objectdata={
        name:'mallikarjuna',
        age:'23',
        disignation:"ASE"
    }

    const handlePush=()=>{
        data(Objectdata)
    }


  return <div>
  <h1>Child component</h1>
    <button onClick={handlePush} >Click</button>
  </div>;
}

export default Child;
