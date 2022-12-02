const Header = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Feriados Chile 2022</h1>
          <p className="mb-5">Encuentra los feriados de este año :D</p>
          <button className="btn bg-violet-800 border-transparent">
            <a href="#miApi">vamos</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
