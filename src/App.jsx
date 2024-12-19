import { useState } from "react";

const App = () => {
  function handleReset() {
    setData({
      bill: "",
      yourTip: 0,
      friendTip: 0,
    });
  }
  function calcTip() {
    const totalTip =
      (data.bill * data.yourTip) / 100 + (data.bill * data.friendTip) / 100;
    return parseFloat((totalTip / 2).toFixed(2));
  }

  const [data, setData] = useState({
    bill: "",
    yourTip: 0,
    friendTip: 0,
  });
  return (
    <div className="p-2 font-semibold flex flex-col gap-4 items-start">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <p>How much was the bill? </p>
          <input
            value={data.bill}
            onChange={(e) => setData({ ...data, bill: e.target.value })}
            type="text"
            placeholder="Enter your bill"
            className="border-2 border-black rounded-lg px-1"
          />
        </div>
        <div className="flex gap-2 items-center">
          <p>How much was the bill? </p>
          <select
            value={data.yourTip}
            onChange={(e) => setData({ ...data, yourTip: e.target.value })}
            className="border-2 border-black rounded-lg"
          >
            <option value={0}>Dissatisfied (0%)</option>
            <option value={5}>It was okay (5%)</option>
            <option value={10}>It was good (10%)</option>
            <option value={20}>Absolutely (20%)</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <p>How did your friend like the service? </p>
          <select
            value={data.friendTip}
            onChange={(e) => setData({ ...data, friendTip: e.target.value })}
            className="border-2 border-black rounded-lg"
          >
            <option value={0}>Dissatisfied (0%)</option>
            <option value={5}>It was okay (5%)</option>
            <option value={10}>It was good (10%)</option>
            <option value={20}>Absolutely (20%)</option>
          </select>
        </div>
      </div>
      {data.bill && (
        <h2 className="text-2xl font-bold">
          You pay ${Number(data.bill) + calcTip()} (${data.bill} + ${calcTip()}{" "}
          tip)
        </h2>
      )}
      <button
        onClick={() => handleReset()}
        className="px-2 py-1 border-2 border-black rounded-lg bg-gray-200"
      >
        Reset
      </button>
    </div>
  );
};

export default App;
