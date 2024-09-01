import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-xl">Flowbite</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
            <a class="mr-5 hover:text-gray-900">
              <Link to={"home"}> Home</Link>
            </a>
            <a class="mr-5 hover:text-gray-900">
              <Link to={"./Aboutus"}> About</Link>
            </a>
            <a class="mr-5 hover:text-gray-900">
              <Link to={"./ContactUs"}> Contact Us</Link>
            </a>
            <Link to={"./Signup"}>
              <a class="mr-5 hover:text-gray-900">
                <i class="fa fa-user fa-1.5x"></i>
              </a>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
