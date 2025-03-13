import "./App.css";
function App() {
  return (
    <>
      <div className="text-center mt-[98px]">
        <h1 className="font-kumbhsans font-[600] text-[36px] text-[#4F4F4F] mb-[53px]">
          Welcome, Sign up
        </h1>
        <div className="w-[512px] m-auto bg-[white] pt-[72px] pb-[100px]">
          <p className="font-[500] text-[16px] text-[#667085] mb-[34px]">
            It is our great pleasure to have
            <br />
            you on board!
          </p>
          <input
            className="font-kumbhsans text-[14px] font-[500] block m-auto w-[248px] h-[42px] rounded-[4px] border-[0.5px] border-[#A7A7A7] pl-[13px] outline-none mb-[14px]"
            type="text"
            placeholder="Enter your Email"
          />
          <input
            className="font-kumbhsans text-[14px] font-[500] block m-auto w-[248px] h-[42px] rounded-[4px] border-[0.5px] border-[#A7A7A7] pl-[13px] outline-none mb-[14px]"
            type="text"
            placeholder="Create your Login"
          />
          <input
            className="font-kumbhsans text-[14px] font-[500] block m-auto w-[248px] h-[42px] rounded-[4px] border-[0.5px] border-[#A7A7A7] pl-[13px] outline-none mb-[34px]"
            type="text"
            placeholder="Create your Password"
          />
          <button className="font-kumbhsans font-[700] w-[248px] pt-[10px] pb-[10px] bg-[#2D88D4] text-[white] rounded-[4px] text-[14px]">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
