import React from 'react';
import Child from './Child';

function Parent() {
const changeData=(e)=>{
    console.log(e,'dgfdchdfv');
}

  return <div>
  <h1>Parent Component</h1>
    <Child data={changeData} />
  </div>;
}

export default Parent;
