const Sidebar = () => {
  return (
    <div className="md:hidden flex justify-center items-center bg-light-blue absolute w-full rounded p-6 mt-4 shadow-[0_40px_20px_rgba(0,0,0,0.25)]">
      <ul className=" w-full  flex flex-col items-center justify-center text-center">
        <li className="w-max text-center sidebar">
          <a href="/" className=" w-max block text-black py-2">
            Home
          </a>
        </li>
        <li className="w-max text-center sidebar">
          <a href="/about" className="block text-black py-2">
            About
          </a>
        </li>
        <li className="w-max text-center sidebar">
          <a href="/land" className="block text-black py-2">
            Land
          </a>
        </li>
        <li className="w-max text-center sidebar">
          <a href="/winery" className="block text-black py-2">
            Winery
          </a>
        </li>
        <li className="w-max text-center sidebar">
          <a href="/wines" className="block text-black py-2">
            Our Wines
          </a>
        </li>
        <li className="w-max text-center sidebar">
          <a href="/news" className="block text-black py-2">
            News
          </a>
        </li>
        <li className="w-max text-center sidebar">
          <a href="/contact" className="block text-black py-2">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

// md:hidden  bg-light-blue absolute w-4/5 flex place-content-center rounded p-6 mt-4 shadow-[0_40px_20px_rgba(0,0,0,0.25)]
