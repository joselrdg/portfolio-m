import './App.css';
import React, { Suspense } from "react";
// import { Main } from './components/Main'
import { HandleClient } from './scriptclient/HandleClient';
import { Loading } from './components/common/loading/Loading';

const Main = React.lazy(() => import("./components/Main"));



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

    <Suspense fallback={<Loading />}>
      <Main />
    </Suspense>

  );
}

export default App;
