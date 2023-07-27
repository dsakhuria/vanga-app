import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const finalInput = parseInt(userInput, 10);

  let randomNum = Math.floor(Math.random() * 101);

  //clear input field after wrong attempt
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const [clickedCount, setClickedCount] = useState(0);

  //main calculation function
  const calculation = () => {
    const differenceNum = Math.abs(finalInput - randomNum);

    // Check if input is empty or zero
    if (isNaN(finalInput)) {
      toast.warning("Input can't be empty or zero");
      return;
    }

    const checkIfBetween = (minNum, betNum, maxNum) => {
      return betNum > minNum && betNum < maxNum;
    };

    if (randomNum === finalInput) {
      console.log("you've guessed it");
      toast.success("Nice, you guessed it!");
    } else if (
      randomNum !== finalInput &&
      checkIfBetween(49, differenceNum, 101)
    ) {
      toast.error("Wrong, correct answer: " + randomNum);
      toast.info("Too far from guessing. difference: " + differenceNum);
    } else if (
      randomNum !== finalInput &&
      checkIfBetween(29, differenceNum, 50)
    ) {
      toast.error("Wrong, correct answer: " + randomNum);
      toast.info("Not that far, difference: " + differenceNum);
    } else if (
      randomNum !== finalInput &&
      checkIfBetween(9, differenceNum, 30)
    ) {
      toast.error("Wrong, correct answer: " + randomNum);
      toast.info("Close guess! difference: " + differenceNum);
    } else if (
      randomNum !== finalInput &&
      checkIfBetween(0, differenceNum, 10)
    ) {
      toast.error("Wrong, correct answer: " + randomNum);
      toast.info("Almost! difference: " + differenceNum);
    } else {
      toast.warning("Something went wrong");
    }

    // attempts count
    const handleClickedCount = () => {
      setClickedCount(clickedCount + 1);
    };
    handleClickedCount();
    setUserInput("");
  };

  let boldVanga = <span className="text-8xl font-bold sm:text-[12rem]">Vanga</span>;

  return (
    <>
      <div
        className="
        w-full h-screen

        bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] 
       from-gray-900 via-purple-900 to-violet-600
      
        flex flex-col items-center justify-between
       text-white text-1xl
        "
      >
        <span className="bbg-yellow-500 w-full h-auto mt-20 flex flex-col justify-center items-center text-center text-4xl">
          <span className="translate-0 sm:translate-y-10">Welcome to</span> {boldVanga}
        </span>
          <span className="bbg-red-500 w-8/12 h-auto text-neutral-400 text-center sm:text-2xl md:text-4xl ">
          try to guess number that is "vanga" has in her mind, if u manage to
          guess it, u will surely be next "vanga".
          </span>
        <span className="bbg-green-500 w-8/12 h-auto text-neutral-400 text-center sm:text-1xl md:text-2xl">
            note: randomly generated number changes after every guess u make.
          </span>
        <div className="bbg-blue-500 w-full h-1/5 flex flex-col items-center justify-center">
          
          <input
            type="text"
            name="guessInput"
            id="guessInput"
            placeholder="Enter number here"
            value={userInput}
            onChange={handleChange}
            className="
                text-center
                bg-transparent
                border-2 rounded-lg w-[17rem] h-[4rem]
                mb-4
                "
          />
          <button
            onClick={calculation}
            className="bg-transparent
                  border-2 rounded-lg 
                  w-[17rem] h-[4rem]
                  transition-all
                  hover:bg-white hover:text-black hover:font-bold
                  focus:bg-white focus:text-black focus:font-bold
                  "
          >
            Try (attempts: {clickedCount})
          </button>
        </div>
        <footer className="w-full h-[20%] bg-neutral-900 flex items-center justify-center">
          <span className="text-gray-500">designed by <a href="#" className="text-white">@dsakhuria</a></span>
        </footer>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
