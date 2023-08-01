
const ProgressBar = ({ progress }) => {
    return (
      <div className="bg-gray-300 rounded-2xl h-4 w-40">
        <div
          className="bg-indigo-400 rounded-2xl h-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;