
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/book.ico";
import { Menu } from "lucide-react";

const Navbar = () => {

  const links = <>
  <li><Link href="/" >Home</Link></li>
  <li><Link href="/books" >All Books</Link></li>
  <li><Link href="/listed-books" >Listed Books</Link></li>
  <li><Link href="/read-books" >Read Books</Link></li>
  </>

  return (
    <nav className="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 backdrop-blur">
      <div className="navbar container mx-auto px-4">
        {/* Logo */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <Menu size={22} />
            </div>

            <ul
              tabIndex={-1}
              className="menu dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-xl border border-base-300"
            >
             
            {links}
              
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Image
              src={logo}
              alt="Book Vibe Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />

            <span>
              Book <span className="text-primary">Vibe</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">
            {links}

            {/* <li>
              <Link href="/categories" className="font-medium">
                Categories
              </Link>
            </li>

            <li>
              <Link href="/about" className="font-medium">
                About
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2 sm:gap-2 ">
          <div className="flex gap-2">
            <a className="btn bg-green-500 text-white">
              Sign In
            </a>

            <a className="btn bg-sky-300 text-white">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
