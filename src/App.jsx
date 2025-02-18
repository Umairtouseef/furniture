import { useState } from 'react'
import { FiShoppingCart, FiUser, FiHeart, FiSearch, FiSettings, FiMenu } from 'react-icons/fi'
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenuFold4Fill } from "react-icons/ri";
import { RiAccountCircle2Line } from "react-icons/ri";
import { RiMenuUnfold2Line } from "react-icons/ri";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import logo from "/assets/logo.png"
import Sidebar from './components/Home/Sidebar';
import SidebarMobile from './components/Home/SidebarMobile';
import NavbarMobile from './components/Navbar/NavbarItemsMobile';
import NavbarItems from './components/Navbar/navbarItems';
import HeroSection from './components/Home/HeroSection';
import BlogSection from './components/Home/BlogSection';
import Footer from './components/Home/FooterSection';



function App() {
  const [cartCount] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(2);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div className="min-h-screen bg-primary overflow-hidden  ">

      {/* <div className="hidden lg:block">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </div>

      <div className="lg:hidden">
        <SidebarMobile isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(false)} />
      </div> */}

      {/* <div className="bg-theme-gradient text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Welcome to Our Store Naturekart</span>
          <span>Call Us: 123 - 456 - 7890</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-200">Wishlist</a>
            <a href="#" className="hover:text-gray-200">My Account</a>
          </div>
        </div>
      </div> */}

      <header className="bg-black shadow-sm ">
        <div className="container mx-auto px-8 py-0 xs:px-2 py-0">
          <div className="flex justify-between items-center">
            {/* <button className="text-primary hover:text-primary  " onClick={() => setIsSidebarOpen(true)}>
              <RiMenuUnfoldLine size={24} />
            </button> */}

            <div>
              <img
                src={"https://themes.pixelstrap.com/multikart/assets/images/furniture-3/logo.png"}
                alt="Naturekart Logo"
                className="w-40 h-30"
              />
            </div>
            <button className="text-primary hover:text-primary lg:hidden  " onClick={() => setIsNavbarOpen(true)}>
              <RiMenuUnfold2Line size={24} />
            </button>

            <div className=" hidden md:block">

              <NavbarItems />

            </div>


            <div className="flex items-center space-x-8 hidden md:block">


              <button
                onClick={handleHeartClick}
                className="p-2 rounded-full shadow hover:bg-primary transition"
              >
                {isHeartFilled ? (
                  <MdFavorite size={25} style={{ color: "#ffffff" }} />
                ) : (
                  <MdFavoriteBorder size={25} style={{ color: "#d1d5db" }} />
                )}
              </button>
              <button className="text-heading hover:text-heading hover:bg-primary">
                <RiAccountCircle2Line size={25} />
              </button>
              <button className="text-heading hover:text-heading hover:bg-primary">
                <FiSearch size={25} />
              </button>
              <button className="text-heading hover:text-heading hover:bg-primary">
                <FiSettings size={25} />
              </button>
              <button className="text-heading hover:text-heading hover:bg-secondary relative">
                        <FiShoppingCart size={25} />
                        {cartItemCount > 0 && (
                            <span
                                className="absolute top-[-5px] right-[-5px] w-5 h-5 bg-yellowbg text-white text-xs font-semibold rounded-full flex items-center justify-center"
                            >
                                {cartItemCount}
                            </span>
                        )}
                    </button>
            </div>
          </div>
        </div>
        <NavbarMobile isOpen={isNavbarOpen} toggleSidebar={() => setIsNavbarOpen(false)} />

      </header>


      <HeroSection />
      {/* <ShopSection /> */}
      {/* <BlogSection /> */}
      {/* <Footer /> */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t flex justify-around items-center py-3 md:hidden">
        <button className="text-gray-500 hover:text-primary flex flex-col items-center">
          <FiHeart size={20} />
          <span className="text-xs">Fav</span>
        </button>

        <button className="text-gray-500 hover:text-primary flex flex-col items-center relative">
          <FiShoppingCart size={20} />
          <span className="text-xs">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        <button className="text-gray-500 hover:text-primary flex flex-col items-center">
          <FiSearch size={20} />
          <span className="text-xs">Search</span>
        </button>

        <button className="text-gray-500 hover:text-primary flex flex-col items-center">
          <FiUser size={20} />
          <span className="text-xs">Account</span>
        </button>

        <button className="text-gray-500 hover:text-primary flex flex-col items-center">
          <FiSettings size={20} />
          <span className="text-xs">Settings</span>
        </button>
      </div>

    </div>
  )
}

export default App