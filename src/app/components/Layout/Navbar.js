import Image from "next/image";
import { Avatar, Menu, MenuItem } from "@mui/material";
import * as logo from "../../images/logo.png";
import octavio from "../../images/octavio.jpg";
import { green } from "@mui/material/colors";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import { BiHelpCircle } from "react-icons/bi";
import { LiaRouteSolid } from "react-icons/lia";

export default function Navbar({ user, email }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const URL ="https://www.eleconomista.com.mx/__export/1554059567165/sites/eleconomista/img/2019/03/31/90330088.jpg_1131660878.jpg"
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(octavio.default);
  return (
    <div className="w-full h-20 bg-white top-0 z-50 fixed shadow-zinc-600 shadow-lg">
      <div className="w-full h-full flex flex-row items-center justify-between px-4">
        <Image
          src={logo}
          alt="logo"
          objectFit="contain"
          className="w-[250px] md:w-[350px]"
        />
        <div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                displat: "flex",
                width: "335px",
                position: "relative",
              },
            }}
          >
            <div
              className="flex flex-col justify-center items-center gap-5"
              style={{ fontFamily: "Poppins" }}
            >
              <div className="flex flex-col justify-center items-center w-full h-full">
                <h1>{`Hola, ${user?.name}`}</h1>
                <h1 className="text-[15px] italic">{email}</h1>
              </div>
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontFamily: "Poppins",
                  backgroundColor: "#99CC33",
                  width: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                }}
              >
                <div className="flex flex-row gap-2 justify-center items-center">
                  <AiOutlineUser size={20} /> Mi Perfil
                </div>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontFamily: "Poppins",
                  backgroundColor: "#F0F0F0",
                  width: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                }}
              >
                <div className="flex flex-row gap-2 justify-center items-center">
                  <LiaRouteSolid size={20} /> Avances
                </div>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontFamily: "Poppins",
                  backgroundColor: "#F0F0F0",
                  width: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                }}
              >
                <div className="flex flex-row gap-2 justify-center items-center">
                  <BiHelpCircle size={20} /> Ayuda
                </div>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontFamily: "Poppins",
                  backgroundColor: "#F0F0F0",
                  width: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                }}
              >
                <div className="flex flex-row gap-2 justify-center items-center">
                  <RxExit size={20} /> Salir
                </div>
              </MenuItem>
            </div>
          </Menu>
          <Avatar
            onClick={handleClick}
            sx={{ backgroundColor: green[500] }}
            className="cursor-pointer"
            src={URL}
          />
        </div>
      </div>
    </div>
  );
}
