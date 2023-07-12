function WinningBall({ winner }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 mt-10">
      <div className="flex bg-[#2F2F2F] border border-4 border-[#FFDD4A] text-[#FFDD4A] h-72 w-72 rounded-full text-center justify-center items-center text-9xl">
        {winner}
      </div>
    </div>
  );
}
export default WinningBall;
