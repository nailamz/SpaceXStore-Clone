import { Link } from "react-router-dom";

function Navbar2() {
    return (
      <nav className="overflow-hidden">
        <div className="fixed bg-black w-screen h-28 flex items-end px-12 p-4 z-10">
          <img src="//shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x.png?v=1614778073"
            srcset="//shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x.png?v=1614778073 1x, //shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x@2x.png?v=1614778073"
             className="scale-75" alt="SpaceX Store" />
          <div className="flex uppercase gap-10 items-center pb-5">
            <Nav toNav="/" navLabel="WOMEN" />
            <DropdownNav toDropdown="/" dropDown="VIEWALL"  />
          </div>
          <div className="text-white flex pb-5 gap-8  w-full justify-end">
            <p>Account</p>
            <p>Search</p>
            <p className="font-bold">Cart(0)</p>
          </div>
        </div>
      </nav>
    );
  };

  function Nav(props){
    return(
      <div className="group relative">
              <p className="text-white font-bold cursor-pointer">
                <Link to={props.toNav}>{props.navLabel}</Link>
              </p>
              <ul className="absolute group-hover:block hidden bg-black border-t-2 mt-10 py-6 px-6 w-48" >
                <li className="w-max text-white text-sm hover:text-gray-400 cursor-pointer">
                  <Link to={props.toDropdown}>{props.dropDown}</Link>
                </li>
              </ul>
              
      </div>
    )
  }

  function DropdownNav(props){
    return(
      <ul className="absolute group-hover:block hidden bg-black border-t-2 mt-10 py-6 px-6 w-48" >
                <li className="w-max text-white text-sm hover:text-gray-400 cursor-pointer">
                  <Link to={props.toDropdown}>{props.dropDown}</Link>
                </li>
      </ul>
    )
  }

  export default Navbar2