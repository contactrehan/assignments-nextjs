

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link href="/">
            <a className="hover:text-gray-300">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="hover:text-gray-300">About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="hover:text-gray-300">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
