declare global {
  interface Window {
    _myWebflow: typeof webflow;
  }
}

function App() {
  return (
    <div className="bg-[#1e1e1e] h-screen grid grid-cols-12 text-[#D9D9D9]">
      <div className="col-span-4 h-full border-r-[1.25px] border-r-[#363636] overflow-y-auto overscroll-none"></div>
      <div className="col-span-8 h-screen relative">
        <button>Sign in to Instagram</button>
      </div>
    </div>
  );
}

export default App;
