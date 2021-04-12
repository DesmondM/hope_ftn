import React from 'react';
import Review from './Review';

function App() {
  return (
    <main>
     <section className='container'>
        <div className='title'>
          
          <img src= "/images/hopefountain4.png"/>
          
          <h2>Hope Fountain Mission </h2>
          <div className='underline'></div>
          <h3></h3>
          <h3>Cemetery Cleanup Initiative </h3>
          <h3>Date: 25 May 2021 </h3>
          <h4>Contact: <a href="tel:+263 77 289 0879">+263 77 289 0879 </a> </h4>
          <h4>LUNCH WILL BE SERVED </h4>
        </div>
        <Review />
         
         
      </section>
    </main>
  );
}

export default App;
 
