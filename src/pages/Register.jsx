import React from "react";
import { Link } from 'react-router-dom';

function Register() {
    return (
      <>
        <Navbar />
        <RegisterForm />
        <Footer />
      </>
    )
  }

const Navbar = () => {
    return (
      <nav className="overflow-hidden">
        <div className="fixed bg-black w-screen h-28 flex items-end px-12 p-4 z-10">
          <img src="//shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x.png?v=1614778073"
            srcset="//shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x.png?v=1614778073 1x, //shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x@2x.png?v=1614778073"
              className="scale-75" alt="SpaceX Store" />
          <div className="flex uppercase gap-10 items-center pb-5">
            <div className="group relative">
              <p className="text-white font-bold cursor-pointer">Starship</p>
              <ul className="absolute group-hover:block hidden bg-black border-t-2 mt-10 py-6 px-6 w-48" >
                <li className="w-max text-white text-sm hover:text-gray-400 cursor-pointer">
                  <a href="#">View All</a></li>
              </ul>
            </div>
            <div className="group relative">
              <p className="text-white font-bold cursor-pointer">Mens</p>
              <ul className="absolute group-hover:block hidden bg-black border-t-2 mt-10 py-1 px-6 w-48" >
                <li className="text-sm  text-white py-4  hover:text-gray-400 cursor-pointer">
                  Shirts</li>
                <li className="text-sm text-white hover:text-gray-400 cursor-pointer">
                  Outwear</li>
                <li className="text-sm  text-white py-4  hover:text-gray-400 cursor-pointer">
                  View All</li>
              </ul>
            </div>
            <div className="group relative">
              <p className="text-white font-bold cursor-pointer">Womens</p>
              <ul className="absolute group-hover:block hidden bg-black border-t-2 mt-10 py-1 px-6 w-48" >
                <li className="text-sm  text-white py-4  hover:text-gray-400 cursor-pointer">
                  Shirts</li>
                <li className="text-sm text-white hover:text-gray-400 cursor-pointer">
                  Outwear</li>
                <li className="text-sm  text-white py-4  hover:text-gray-400 cursor-pointer">
                  View All</li>
              </ul>
            </div>
            <div className="group relative">
              <p className="text-white font-bold cursor-pointer">Kids</p>
              <ul className="absolute group-hover:block hidden bg-black border-t-2 mt-10 py-1 px-6 w-48" >
                <li className="text-sm  text-white py-4  hover:text-gray-400 cursor-pointer">
                  Shirts</li>
                <li className="text-sm text-white hover:text-gray-400 cursor-pointer">
                  Outwear</li>
                <li className="text-sm  text-white py-4  hover:text-gray-400 cursor-pointer">
                  View All</li>
              </ul>
            </div>
            <div className="group relative">
              <p className="text-white font-bold cursor-pointer">Accessories</p>
              <ul className="absolute group-hover:block hidden bg-black border-t-2 mt-10 py-6 px-6 w-48" >
                <li className="w-max text-white text-sm hover:text-gray-400 cursor-pointer">
                  View All</li>
              </ul>
            </div>
          </div>
          <div className="text-white flex pb-5 gap-8  w-full justify-end">
            <Link to="/Login"><p>Account</p></Link>
            <p>Search</p>
            <p className="font-bold">Cart(0)</p>
          </div>
        </div>
      </nav>
    )
}
  
const RegisterForm = () => {
    return(
    <>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-20 m-auto bg-white lg:max-w-xl">
            <h1 className="textfield text-2xl font-semibold text-center">
                REGISTER
            </h1>
            <p className="mt-8 text-sm font-medium text-center text-gray-700">
              Please fill in the information below:
            </p>
            <form className="mt-6">
              <div className="mb-2">
                    <input
                        type="email"
                        className="peer block w-full px-4 py-2 mt-2 text-black bg-white border focus:border-black focus:outline-none"
                        placeholder="First Name"
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="email"
                        className="peer block w-full px-4 py-2 mt-2 bg-white border focus:border-black focus:outline-none"
                        placeholder="Last Name"
                    />
                </div>
                <div className="relative mb-2">
                    <input
                        type="email"
                        className="peer block w-full px-4 py-2 mt-2 bg-white border focus:border-black focus:outline-none"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 bg-white border focus:border-black focus:outline-none"
                        placeholder="Password"
                    />
                </div>
                <div className="mt-6">
                <Link to="/Home">
                <button className="group relative w-full px-4 py-2 overflow-hidden bg-black border-t border-r border-l border-b border-black text-sm">
                  <div className="absolute inset-0 w-0 bg-white transition-all duration-[400ms] ease-out group-hover:w-full bor"></div>
                  <span className="btnview relative text-white group-hover:text-black">CREATE MY ACCOUNT</span>
                </button>
                </Link>
                </div>
            </form>
        </div>
    </div>
    </>
    )
}

  const Footer = () => {
    return (
      <div className="bg-black">
        <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-white hover:text-gray-400 cursor-pointer">
                FAQ
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-white hover:text-gray-400 cursor-pointer">
                Search
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-white hover:text-gray-400 cursor-pointer">
                Privacy Policy
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-white hover:text-gray-400 cursor-pointer">
                Terms & Conditions
              </a>
            </div>
          </nav>
        </div>
        <p className="p-16 flex justify-start text-sm leading-6 text-center text-gray-400 hover:text-white cursor-pointer">
            © SPACEX STORE
        </p>
      </div>
    )
  }

export default Register