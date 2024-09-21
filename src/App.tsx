import React, { useCallback, useState } from "react";
import { blockingFunc, randomIntFromInterval } from "./utils";

const App: React.FC = () => {
  const [ random, setRandom ] = useState<number>(0);

  // const workerCall = useCallback(async () => {
  //   await workerInstance.someRPCFunc();
  // }, []);

  const normalFuncCall = useCallback(() => {
    blockingFunc();
  }, []);

  const randomIntHandler = useCallback(() => {
    setRandom(randomIntFromInterval(1, 100));
  }, []);

  // const fetchData = useCallback(async () => {
  //   console.log('Hello');
  //   const data = await workerInstance.fetchPage();
  //   console.log('Hello');
  //   console.log(data);
  // }, []);

  return (
    <section>
      {/* <button onClick={workerCall}>Worker Call</button>
      <button onClick={fetchData}>Worker Call Fetch Data</button> */}
      <button onClick={normalFuncCall}>Main Thread Call</button>
      <button onClick={randomIntHandler}>Random Int {random}</button>
    </section>
  )
};

export default App;