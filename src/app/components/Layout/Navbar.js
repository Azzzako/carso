import Image from "next/image";
import * as logo from "../../images/logo.png";

export default function Navbar() {
  return (
    <div className="w-full h-20 bg-white top-0 z-50 fixed shadow-zinc-600 shadow-lg">
      <div className="w-full h-full flex flex-row items-center justify-around">
        <Image src={logo} alt="logo" objectFit="contain" className="w-[250px] md:w-[350px]"/>
        <h1>Hola</h1>
      </div>
    </div>
  );
}
