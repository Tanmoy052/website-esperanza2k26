const LoaderComponent = () => {
  const letters = "ESPERANZA".split("");

  return (
    <div className="flex items-center justify-center h-screen bg-black w-screen ">
      <div className="flex text-5xl font-bold text-white space-x-1">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="esperanza-blink"
            style={{
              animationDelay: `${index * 0.3}s`,
              animationDuration: "2.7s",
              animationIterationCount: "infinite",
              textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoaderComponent;
