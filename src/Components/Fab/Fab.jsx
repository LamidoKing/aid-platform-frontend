import React from "react"
import PropTypes from "prop-types"
import Fab from "@material-ui/core/Fab"
import Tooltip from "@material-ui/core/Tooltip"
import Zoom from "@material-ui/core/Zoom"

const propTypes = {
  arial: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  classes: PropTypes.string,
  handleClick: PropTypes.func,
  Icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

const defaultProps = {
  arial: "arial",
  color: "primary",
  fontSize: "large",
  classes: "",
  handleClick: () => {},
}

const FabButton = (props) => {
  const { arial, color, fontSize, classes, Icon, handleClick } = props
  return (
    <>
      <Tooltip
        title={arial}
        TransitionComponent={Zoom}
        aria-label={arial}
        arrow
      >
        <Fab
          color={color}
          aria-label={arial}
          onClick={handleClick}
          fontSize={fontSize}
          className={classes}
        >
          <Icon color="secondary" fontSize="large" />
        </Fab>
      </Tooltip>
    </>
  )
}

FabButton.propTypes = propTypes
FabButton.defaultProps = defaultProps

export default FabButton
