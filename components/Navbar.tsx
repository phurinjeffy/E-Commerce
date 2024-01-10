import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full fixed z-10 bg-white border-b-[0.5px] border-opacity-50">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-5">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image 
              src="/uniqlo.png"
              alt="Logo"
              width={90}
              height={9}
              className="object-contain"
            />
          </Link>
          <Link href="/" className="font-extrabold">WOMEN</Link>
          <Link href="/" className="font-extrabold">MEN</Link>
          <Link href="/" className="font-extrabold">KIDS</Link>
          <Link href="/" className="font-extrabold">BABY</Link>
        </div>

        <div className="flex items-center gap-8">
          <Link href="/">
            <Image 
              src="/search.svg"
              alt="Logo"
              width={25}
              height={25}
              className="object-contain"
            />
          </Link>
          <Link href="/">
            <Image 
              src="/user.svg"
              alt="Logo"
              width={25}
              height={25}
              className="object-contain"
            />
          </Link>
          <Link href="/">
            <Image 
              src="/heart.svg"
              alt="Logo"
              width={25}
              height={25}
              className="object-contain"
            />
          </Link>
          <Link href="/">
            <Image 
              src="/cart.svg"
              alt="Logo"
              width={25}
              height={25}
              className="object-contain"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
