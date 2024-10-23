const Hearder = () => {
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52  shadow lg:gap-6 text-lg font-medium"
            >
              <li className="btn bg-white border-none shadow-none">Home</li>
              <li className="btn bg-white border-none shadow-none">Recipes</li>
              <li className="btn bg-white border-none shadow-none">About</li>
              <li className="btn bg-white border-none shadow-none">Search</li>
            </ul>
          </div>
          <a className=" lg:text-2xl md:text-xl text-lg lg:font-bold font-m">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-lg font-medium">
            <li className="btn bg-white border-none shadow-none">Home</li>
            <li className="btn bg-white border-none shadow-none">Recipes</li>
            <li className="btn bg-white border-none shadow-none">About</li>
            <li className="btn bg-white border-none shadow-none">Search</li>
          </ul>
        </div>

        <div className="avatar navbar-end sm:gap-3">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs sm:block hidden"
          />
          <div className="ring-primary ring-offset-base-50 sm:w-10 w-7 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Hearder;
