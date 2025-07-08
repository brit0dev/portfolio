const Header = () => {
  return (
    <header className="w-full h-[calc(100vh-72px)] snap-start bg-orange-200">
      <div className="relative flex items-center h-full w-full p-8 bg-[#FDF6E4] rounded-xl shadow-sm">
        <div>
          <h1 className="text-4xl font-bold">
            Matheus Henrique <br />
            <span className="text-2xl">Fullstack &lt;dev/&gt;</span>
          </h1>
        </div>
        <div className="absolute left-34 -bottom-1.5 w-4 h-4 bg-[#FDF6E4] rotate-45 rounded-sm shadow-[2px_2px_2px_rgb(0,0,0,0.1)]"></div>
      </div>
    </header>
  );
};

export default Header;
