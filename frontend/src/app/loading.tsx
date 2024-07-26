const Loading = () => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white dark:bg-[#020817]"
      role="loading"
    >
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
};

export default Loading;
