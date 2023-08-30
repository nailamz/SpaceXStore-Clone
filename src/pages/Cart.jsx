import React from "react";
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <>
      <Navbar />
      <CartProduct />
      <Shipping />
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
          <Link to="/Cart"><p className="font-bold">Cart(1)</p></Link>
        </div>
      </div>
    </nav>
  )
}

const CartProduct = () => {
  return (
    <div className="overflow-hidden mt-20">
      <div className="w-screen flex-row h-28 flex justify-center px-12 p-20">
        <h1 className="titlehero text-xl font-extrabold">CART</h1>
      </div>
      <div className="flex flex-col justify-center md:flex-row gap-4">
        <div className="md:w-3/4">
          <div className="p-6 mb-4">
            <table className="w-full table-fixed ">
              <thead className="">
                <tr className="">
                  <th className="text-left text-sm font-semibold w-4/6">PRODUCT</th>
                  <th className="text-sm text-center font-semibold w-1/6">QUANTITY</th>
                  <th className="text-sm font-semibold w-1/6 text-end">TOTAL</th>
                </tr>
              </thead>
              <hr class="h-px mb-2 mt-2 w-fullborder-0"></hr>
              <tbody>
                <tr className="">
                  <td className="py-4 ">
                    <div className="flex items-center">
                      <img className="h-24 w-24 mr-4" src="src/assets/F9model.webp" />
                      <span className="p-2 text-sm font-semibold">SPACEX F9 MODEL
                        <p className="pt-3 text-sm font-semibold">$150.00</p>
                      </span>
                    </div>
                  </td>
                  <td className="my-12 flex justify-center items-center">
                    <div className="">
                      <button className="border-t border-l border-b py-2 px-4">-</button>
                      <span className="text-center w-8">1</span>
                      <button className="border-t border-r border-b py-2 px-4">+</button>
                    </div>
                  </td>
                  <td className="py-4 text-end">$150.00</td>
                </tr>
              </tbody>
              <hr class="h-px mb-2 mt-2 w-fullborder-0"></hr>
            </table>
            <div className="flex flex-col gap-3 items-end text-end">
              <div>
                <p className="text-base font-semibold">TOTAL:</p>
                <p className="font-semibold">$150.000</p>
                <p className="text-sm font-normal">Shipping & taxes calculated at checkout</p>
              </div>
              <button className="group relative h-10 w-28 overflow-hidden bg-black border-t border-r border-l border-b border-black text-sm">
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[400ms] ease-out group-hover:w-full bor"></div>
                <span className="btnview relative text-white group-hover:text-black">CHECKOUT</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Shipping = () => {
  return (
    <>
    <fieldset className="border border-solid border-gray h-52 w-2/3 mx-auto">
      <legend className="titlehero text-xl font-semibold text-center">ESTIMATE SHIPPING + HANDLING</legend>
      <div class="mt-8 -mx-2 flex justify-center items-center">
        <div class="px-2 w-1/4">
          <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Country</label>
          <div>
            <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 focus:outline-none transition-colors cursor-pointer">
              <option value="01">Indonesia</option>
              <option value="02">Singapore</option>
              <option value="03">United States</option>
              <option value="04">German</option>
              <option value="05">Poland</option>
              <option value="06">Russia</option>
              <option value="07">China</option>
              <option value="08">Japan</option>
              <option value="09">Italy</option>
              <option value="10">Canada</option>
              <option value="11">United Kingdom</option>
              <option value="12">Australia</option>
            </select>
          </div>
        </div>
        <div class="px-2 w-1/4">
          <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Province</label>
          <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 focus:outline-none transition-colors cursor-pointer">
            <option value="2020">Aceh</option>
            <option value="2021">Bali</option>
            <option value="2022">Bangka-Belitung</option>
            <option value="2023">Banten</option>
            <option value="2024">Bengkulu</option>
            <option value="2025">Gorontalo</option>
            <option value="2026">Jakarta</option>
            <option value="2027">Jambi</option>
            <option value="2028">West Java</option>
            <option value="2029">Central Java</option>
          </select>
        </div>
        <div class="px-2 w-1/4">
          <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Zip code</label>
          <div>
            <input class="px-3 py-2 mb-1 border border-gray-200 focus:outline-none transition-colors" placeholder="Zip code" type="text" />
          </div>
        </div>
        <button className="mt-4 group relative h-10 w-28 overflow-hidden bg-black border-t border-r border-l border-b border-black text-sm">
          <div className="absolute inset-0 w-0 bg-white transition-all duration-[400ms] ease-out group-hover:w-full bor"></div>
          <span className="btnview relative text-white group-hover:text-black">ESTIMATED</span>
        </button>
      </div>      
    </fieldset>
    <div className="w-screen flex-row h-9 flex justify-center px-12 p-7"></div>
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
            <Link to="/Search">
              <a href="#" className="text-base leading-6 text-white hover:text-gray-400 cursor-pointer">
                Search
              </a>
            </Link>
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


export default Cart