
import { type } from '@testing-library/user-event/dist/type';
import { createElement } from 'react';
import './App.css';
import Home from './components/home';

 function createRandomHeights(n){

  const arr = [];
  for( let i = 0; i < n; i += 1) {
    arr.push(Math.floor(Math.random()*94 + 5)); // 5 - 98 
  }
  
  return arr;
} 
async function generateArray(){

  const bars_container = document.getElementById('bars_container');
  const n = Number(document.getElementById('array_size').value);
  bars_container.innerHTML='';
  console.log(n)
  const container_width = bars_container.offsetWidth;

  const arr = await createRandomHeights(n);
  let w = container_width/(3*n+1); 
  for (let i =0 ; i<n ; i++){

    const bar = document.createElement('div');


    bar.classList.add('bar');
    bar.style.height=`${arr[i]}%`; // 9%
    bar.style.width=`${2 * w}px`;
    bar.style.marginLeft = `${0.5 * w}px`;
    bar.style.marginRight = 
    bars_container.appendChild(bar);
    
  }

  
  
}
function App() {
  return (
    <div className="App">
      <Home generateArray={generateArray}/>
    </div>
  );
}

export default App;
