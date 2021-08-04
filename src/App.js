import './App.css';
import React, { Suspense, useEffect, useState } from "react";
import { Main } from './components/Main'
// import { Client } from './scriptclient/Client';



function App() {

  // Client()


  return (
      
      <div>
      <Suspense fallback={<h1>Loading SectionOne...</h1>}>
        <Main />
      </Suspense>
    </div>
  );
}

export default App;
