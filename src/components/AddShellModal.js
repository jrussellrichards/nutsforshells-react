import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import AddShell from "../containers/addShell";
// import forms from '../components/forms'

function getModalStyle() {
  const top = 50;
  const left = "50%";

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const defaultToolbarStyles = {
  iconButton: {},
};
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    left: "50%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SimpleModal = function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen} className={classes.iconButton}>
        <AddIcon className={classes.deleteIcon} />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ left: "40%" ,width : '30em' }}
        
      >
        <AddShell data={props.data} onLoadData={props.onLoadData} handleClose={handleClose}/>
      </Modal>
    </>
  );
};

export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(
  SimpleModal
);
