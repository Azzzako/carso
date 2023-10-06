import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";

export default function Sections() {
  const sections = [
    "Tus Cursos",
    "Tus Certificados",
    "Tus Rutas",
    "Tus Diplomados",
    "Tus especialidades",
  ].map((element) => {
    return <MenuItem key={element.length}>{element}</MenuItem>;
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex h-full justify-start items-center">
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <BiMenuAltLeft size={40}/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}
      >
        {sections}
      </Menu>
    </div>
  );
}
