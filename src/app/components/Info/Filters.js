import { useState } from "react";
import Sections from "./Sections";
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import { FiFilter } from "react-icons/fi";

export default function Filters({
  setSearch,
  ascendingOrder,
  setAscendingOrder,
  setCompleted,
  completed,
  setNotCompleted,
  notCompleted,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const orderFilter = () => {
    setAscendingOrder(!ascendingOrder);
  };

  const completeFilter = () => {
    setCompleted(!completed);
  };

  const notCompleteFilter = () => {
    setNotCompleted(!notCompleted);
  };

  return (
    <div className="flex flex-row p-12 gap-7 justify-center items-center">
      <TextField
        variant="standard"
        label="Buscar Curso"
        onChange={(e) => setSearch(e.target.value)}
      />
      
        <Sections />
     

      
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <FiFilter size={35} />
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
          <MenuItem>
            <FormControlLabel
              control={
                <Checkbox
                  checked={ascendingOrder}
                  onChange={orderFilter}
                  name="ordenar"
                />
              }
              label="A-Z"
            />
          </MenuItem>

          <MenuItem>
            <FormControlLabel
              control={
                <Checkbox
                  name="completados"
                  onChange={completeFilter}
                  checked={completed}
                />
              }
              label="Completados"
            />
          </MenuItem>

          <MenuItem>
            <FormControlLabel
              control={<Checkbox name="todos" />}
              label="En curso"
              onChange={notCompleteFilter}
              checked={notCompleted}
            />
          </MenuItem>
        </Menu>
      </div>
  );
}
