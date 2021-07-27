import './App.css';
import React, { Suspense, useEffect } from "react";
import { Main } from './components/Main'
import { ScriptClient } from './scriptclient/ScriptClient';



function App() {

  useEffect(() => {
    ScriptClient()
  }, [])

  return (
      
      <div onScroll={console.log('onscroll')}>
      <Suspense fallback={<h1>Loading SectionOne...</h1>}>
        <Main />
      </Suspense>
    </div>
  );
}

export default App;
