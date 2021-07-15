import './App.css';
import React, { Suspense } from "react";
import { Main } from './components/Main'
import { SectionTwo } from './components/sectionone/SectionTwo';



function App() {
  return (
    <div>
      <Suspense fallback={<h1>Loading SectionOne...</h1>}>
        <Main />
      </Suspense>

      {/* <SectionTwo/> */}
    </div>
  );
}

export default App;
