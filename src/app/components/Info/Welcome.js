import Image from "next/image";
import * as avatar from "../../images/avatar.png";
import { BiEdit } from "react-icons/bi";
import { SiBookstack } from "react-icons/si";
import { Tooltip } from "@mui/material";

export default function Welcome({ email, user, total, complete, incomplete }) {
  return (
    <section
      className="w-full h-full flex flex-col md:flex-row justify-center items-center bg-slate-500 text-white md:px-60"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 p-8 text-center relative">
        <h1 className="text-xl italic">Bienvenido a la Plataforma de capacitacion para el empleo</h1>
        <Image src={avatar} alt="avatar" />
        <h1 className="absolute bottom-[154px] text-[125px]">
          {user?.name[0]}
        </h1>
        <h1 className="flex gap-2 justify-center items-center">
          {`Hola, ${user?.name}`}
        </h1>
        <h1 className="italic">{`${email}`}</h1>
        <Tooltip title="Editar Perfil">
          <div>
            <BiEdit
              size={30}
              className="transition-all hover:scale-110 cursor-pointer"
            />
          </div>
        </Tooltip>
      </div>

      <div
        className="w-full h-full flex flex-col justify-center items-center text-center gap-4 p-4"
        style={{ fontFamily: "Poppins" }}
      >
        <SiBookstack size={60}/>
        <h1>Actualmente tienes:</h1>
        <span>{`${total} Cursos a los que estas inscrito`}</span>
        <span>{`${complete?.length} Certificaciones`}</span>
        <span>{`${incomplete?.length} Cursos incompletos`}</span>
      </div>
    </section>
  );
}
