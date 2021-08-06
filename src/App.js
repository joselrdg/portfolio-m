import './App.css';
import React, { Suspense } from "react";
import { Main } from './components/Main'
import { HandleClient } from './scriptclient/HandleClient';




function App() {

  //  const onUnload = e => { // the method that will be used for both add and remove event
  //     e.preventDefault();
  //     e.returnValue = '';
  //  }

  HandleClient()

  // useEffect(() => {
  //   window.addEventListener("beforeunload", onUnload);
  //   return () => {
  //     window.removeEventListener("beforeunload", onUnload);
  //   }
  // }, [])

  return (

    <div>
      <Suspense fallback={<h1>Loading SectionOne...</h1>}>
        <Main />
      </Suspense>
    </div>
  );
}

export default App;
