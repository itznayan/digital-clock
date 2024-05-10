import { useState } from "react";

function App() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);
  const update = () => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  setInterval(() => {
    update();
  }, 1000);
  return (
    <>
      <div
        className="p-2 flex
      items-center flex-col"
      >
        <h2 className=" rounded-xl animate-pulse mt-20 text-gray-200 tracking-[6px] text-7xl font-bold font-sans bg-transparent bg-gradient-to-t to-black via-slate-950 p-4 from-slate-800 ">
          Digital Clock
        </h2>
        <div className="mt-10 text-2xl text-white">
          <h1 className="mt-10 font-bold text-slate-100 text-5xl">
            {currentTime}
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
