import { FiInstagram } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import * as apple from "../../images/appstore.png";
import * as google from "../../images/google.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="flex flex-col md:flex-row w-full h-full justify-around bg-[#4b8c87] gap-7 p-7 text-white"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl">Legales</h1>
        <div className="flex flex-col gap-1">
          <span>Aviso de privacidad</span>
          <span>Terminos de uso</span>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl">Redes Sociales</h1>
        <div className="flex flex-row gap-3">
          <FiInstagram size={40} />
          <CiFacebook size={40} />
          <FaTiktok size={40} />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl">Descargas</h1>
        <div className="flex flex-col gap-3">
          <Image src={apple} width={100} height={100} />
          <Image src={google} width={110} height={100} />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl">Ayuda</h1>
        <div className="bg-[#00423d] w-32 h-10 flex justify-center items-center">
          <button>Contactanos</button>
        </div>
      </div>
    </div>
  );
}
