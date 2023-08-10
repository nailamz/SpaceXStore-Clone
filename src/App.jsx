import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <Catalog />
      <Footer />
    </>
  )
}

const Navbar = () => {
  return (
    <nav className="overflow-hidden">
      <div className="fixed bg-black w-screen h-28 flex items-end px-12 p-5 z-10">
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
          <p>Account</p>
          <p>Search</p>
          <p className="font-bold">Cart(0)</p>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <div className="mt-24">
      <img className="imgX w-screen" src="/src/assets/Starshipheader.webp"></img>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-screen flex-row h-28 flex justify-center px-12 p-20">
        <h1 className="titlehero text-xl font-extrabold">FEATURED PRODUCTS</h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 px-12 p-5">
        <div className="mr-4 bg-white">
          <div className="p-1">
            <div className="bg-[url('src/assets/rocket.webp')] hover:bg-[url('src/assets/rocket-hover.webp')] bg-cover py-80 duration-[400ms]"></div>
          </div>
          <div className="pt-5">
            <a className="products font-bold flex justify-center text-sm">STARSHIP TORCH PRESALE</a>
            <p className="price flex justify-center text-sm font-semibold">$175.00</p>
          </div>
        </div>
        <div className="mr-4 block-lg bg-white">
          <div className="p-1">
            <div className="bg-[url('src/assets/hoodie.webp')] hover:bg-[url('src/assets/hoodie-hover.webp')] bg-cover py-80 duration-[400ms]"></div>
          </div>
          <div className=" pt-5">
            <a className="products font-bold flex justify-center text-sm">UNISEX STARSHIP HEATSHIELD PULLOVER HOODIE</a>
            <p className="price flex justify-center text-sm font-semibold">$65.00</p>
          </div>
        </div>
      </div>
      <div className="w-screen flex-row h-9 flex justify-center px-12 p-5"></div>
      <div className="text-white font-bold view flex justify-center p-5">
        <button className="group relative h-12 w-48 overflow-hidden bg-black border-t border-r border-l border-b border-black text-sm">
          <div className="absolute inset-0 w-0 bg-white transition-all duration-[400ms] ease-out group-hover:w-full bor"></div>
          <span className="btnview relative text-white group-hover:text-black">VIEW ALL FEATURED</span>
        </button>
      </div>
      <div className="w-screen flex-row h-9 flex justify-center px-12 p-7"></div>
    </div>
  )
}

const Catalog = () => {
  return (
    <div>
      <div className="container mx-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 opacity-75">
          <div className="relative col-span-1">
            <div className="gradient-overlay absolute w-full h-full">

              <img src="https://shop.spacex.com/cdn/shop/files/starship_schematic_charcharcoal_750x900_crop_center.png?v=1681736452" alt="" className="object-cover h-full w-full transition-transform duration-900 transform hover:scale-110 duration-1000 bg-gradient-to-t"></img>
            </div>
            <div className="absolute bottom-10 left-5">
              <a href="" className="">
                <button className="btn py-2 px-8 font-bold">WOMEN'S
                  <span className="block text-xs font-semibold">VIEW PRODUCT</span>
                </button>
              </a>
            </div>
          </div>
          <div className="relative col-span-1">
            <div className="gradient-overlay absolute top-0 left-0 w-full h-full"></div>
            <img src="https://shop.spacex.com/cdn/shop/files/raptor_schematic_tshirt_military_green_750x900_crop_center.png?v=1681736425" alt="" className="object-cover h-full w-full transition-transform duration-900 transform hover:scale-110 duration-1000"></img>
            <div className="absolute bottom-10 left-5">
              <a href="" className="">
                <button className="btn py-2 px-14 font-bold">MEN'S
                  <span className="block text-xs font-semibold">VIEW PRODUCT</span>
                </button>
              </a>
            </div>
          </div>
          <div className="relative col-span-1">
            <div className="gradient-overlay absolute top-0 left-0 w-full h-full"></div>
            <img src="https://shop.spacex.com/cdn/shop/files/Starship_Hat_1000x.png?v=1681735173" alt="" className="object-cover h-full w-full transition-transform duration-900 transform hover:scale-110 duration-1000"></img>
            <div className="absolute bottom-10 left-5">
              <a href="" className="">
                <button className="btn py-2 px-5 font-bold">ACCESSORIES
                  <span className="block text-base font-semibold">VIEW PRODUCT</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default App