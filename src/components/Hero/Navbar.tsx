import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex justify-between py-6 lg:px-32 md:px-12 px-6 items-center">
      <Image src="/assets/logo.png" width={50} height={50} alt="logo" />

      <div className="flex items-center gap-6">
        <Link href="/">
          <p className="text-white">Character</p>
        </Link>
        <Link href="/">
          <p className="text-white">Starships</p>
        </Link>
        <Link href="/">
          <p className="text-white">Planets</p>
        </Link>
      </div>
    </div>
  );
};
