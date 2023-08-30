import React from "react";
import CardCatalogue from "../components/Catalogues";
import { Link } from 'react-router-dom';


function Featured() {
  return (
    <>
      <Navbar />
      <Catalogue />
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
  );
};

const Catalogue = () => {
  return (
  <div className="overflow-hidden mt-20">
       <div className="w-screen flex-row h-28 flex justify-center px-12 p-20">
         <h1 className="titlehero text-xl font-extrabold">FEATURED PRODUCT</h1>
       </div>
       <div class="grid gap-3 mb-8 md:grid-cols-2 xl:grid-cols-4 mx-10" >
        <CardCatalogue 
          image= "bg-[url('src/assets/rocket.webp')] hover:bg-[url('src/assets/rocket-hover.webp')] bg-cover bg-no-repeat bg-center py-44 duration-[400ms]"
          cardTitle = "STARSHIP TORCH PRESALE"
          priceCard = "$175.00" />
        <CardCatalogue 
          image= "bg-[url('src/assets/hoodie.webp')] hover:bg-[url('src/assets/hoodie-hover.webp')] bg-cover bg-no-repeat bg-center py-44 duration-[400ms]"
          cardTitle = "UNISEX STARSHIP HEATSHIELD PULLOVER HOODIE"
          priceCard = "$65.00" />
        <CardCatalogue 
          image= "bg-[url('src/assets/raptorshirt.webp')] hover:bg-[url('src/assets/raptorshirt-hover.webp')] bg-cover bg-no-repeat bg-center py-44 duration-[400ms]"
          cardTitle = "UNISEX RAPTOR SCHEMATIC T-SHIRT"
          priceCard = "$30.00" />
        <CardCatalogue 
          image= "bg-[url('src/assets/schemashirt.webp')] hover:bg-[url('src/assets/schemashirt-hover.webp')] bg-cover bg-no-repeat bg-center py-44 duration-[400ms]"
          cardTitle = "UNIESEX STARSHIP SCHEMATIC T-SHIRT"
          priceCard = "$30.00" />
       </div>
       <div className="w-screen flex-row h-9 flex justify-center px-12 p-5"></div>
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

export default Featured