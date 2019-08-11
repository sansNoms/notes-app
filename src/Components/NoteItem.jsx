import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import InputAdornment from "@material-ui/core/InputAdornment";
import DeleteIcon from "@material-ui/icons/Delete";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const NoteItem = props => {
  const [header, setHeader] = useState(props.header);
  const [content, setContent] = useState(props.content);
  const [date, setDate] = useState(props.date);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  const handleChangeHeader = e => {
    setHeader(e.target.value);
  };

  const handleChangeContent = e => {
    setContent(e.target.value);
  };

  return (
    <>
      <ListItem
        button
        onClick={handleClickOpen}
        style={{
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
          backgroundColor: "rgba(0, 0, 0, 0.09)",
          minWidth: "95%",
          maxHeight: "350px",
          overflow: "auto"
        }}
      >
        <ListItemText
          primary={
            <TextField
              fullWidth
              label={date}
              value={header}
              onChange={handleChangeHeader}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {(open && handleChangeHeader) ||
                    (open && handleChangeContent) ? (
                      <IconButton>SAVE </IconButton>
                    ) : (
                      <></>
                    )}

                    <IconButton>
                      <DeleteIcon />{" "}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          }
        />
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <TextField
          multiline
          fullWidth
          value={content}
          onChange={handleChangeContent}
        />
      </Collapse>
    </>
  );
};

export default NoteItem;
