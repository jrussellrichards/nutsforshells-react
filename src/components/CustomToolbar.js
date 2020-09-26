import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import AddShellModal from "./AddShellModal";
const defaultToolbarStyles = {
  iconButton: {},
};

class CustomToolbar extends React.Component {
  render() {
    const { classes } = this.props;

    return (

        <Tooltip title={"custom icon"}>
          <IconButton className={classes.iconButton} onClick={this.handleClick}>
            <AddShellModal />
          </IconButton>
        </Tooltip>

    );
  }
}

export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(
  CustomToolbar
);
