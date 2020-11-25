import React from "react"
import PropTypes from "prop-types"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import {
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core"
import dialogStyles from "styles/components/dialogStyles"

const defaultProps = {
  open: false,
  handleClose: () => {},
  message: null,
  title: null,
  errorMessage: null,
  handleRefresh: () => {},
  handleOkButton: () => {},
  Component: null,
}

const propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  message: PropTypes.string,
  title: PropTypes.string,
  errorMessage: PropTypes.string,
  handleRefresh: PropTypes.func,
  handleOkButton: PropTypes.func,
  Component: PropTypes.node,
}
const DiaLog = (props) => {
  const classes = dialogStyles()
  const theme = useTheme()
  const {
    open,
    handleClose,
    message,
    title,
    errorMessage,
    handleOkButton,
    handleRefresh,
    Component,
  } = props
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <>
      <Dialog
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        PaperProps={{
          style: { backgroundColor: theme.palette.secondary.main },
        }}
        fullScreen={Component && fullScreen}
      >
        {message && (
          <>
            <DialogContent>
              <DialogTitle id="alert-dialog-title" className={classes.title}>
                {title}
              </DialogTitle>
              <DialogContentText className={classes.message}>
                {message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={handleClose}>
                cancel
              </Button>
              <Button color="primary" onClick={handleOkButton}>
                ok
              </Button>
            </DialogActions>
          </>
        )}
        {errorMessage && (
          <>
            <DialogContent>
              <DialogContentText color="secondary">
                {errorMessage}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="secondary" onClick={handleRefresh}>
                refresh
              </Button>
              <Button color="secondary" onClick={handleClose}>
                cancel
              </Button>
            </DialogActions>
          </>
        )}
        {Component && Component}
      </Dialog>
    </>
  )
}

DiaLog.defaultProps = defaultProps

DiaLog.propTypes = propTypes

export default DiaLog
