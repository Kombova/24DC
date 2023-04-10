import Header from "./components/Header";
import arrow from "./assets/arrow.svg"
import waves from './assets/waves.svg'
import ellips from './assets/ellips.svg'


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="relative h-[80vh] overflow-x-hidden flex justify-center items-center bg-gradient-to-b from-dark-blue to-normal-blue">
        <div className="w-[550px] flex flex-col justify-center items-center text-center">
          <h1 className="title-max">Bring Your Tech Ideas to Life</h1>
          <p className=" text-muted">Our focus is the agile development of web, cloud,</p>
          <p className=" text-muted">and mobile applications – and helping organizations create</p>
          <p className=" text-muted">and sustain digital innovation.</p>
          <div className="flex w-full justify-center items-center space-x-2 my-4">
          <button className="blue-button">
          Get started
          <img src={arrow} alt="arrow" />
        </button>
        <button className="px-8 underline-offset-1 underline">Learn More</button>
          </div>
        </div>
        <div className=" absolute left-0 bottom-0 opacity-60">
        <img className="waves" src={waves} alt="waves" />
        </div>
        <div className=" absolute right-0 top-0 opacity-40">
          <img className="ellips" src={ellips} alt="elips" />
        </div>
      </div>
    </div>
  );
}

export default App;
