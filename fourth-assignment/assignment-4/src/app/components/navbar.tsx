

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link href="/">
            <p className="hover:text-gray-300">Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p className="hover:text-gray-300">About</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="hover:text-gray-300">Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
