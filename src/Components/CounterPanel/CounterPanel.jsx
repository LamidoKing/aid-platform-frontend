import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
// @material-ui Components
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
// @material-ui Icon
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
// Components
import GridContainer from "Components/Grid/GridContainer"
import GridItem from "Components/Grid/GridItem"
// Hooks
import { useCounter } from "hooks"
// Styles
import counterPanelStyles from "styles/components/counterPanelStyles"

const propTypes = {
  auth: PropTypes.bool,
  handleHideCounter: PropTypes.func,
}
const defaultProps = {
  auth: false,
  handleHideCounter: () => {},
}
const CounterPanel = (props) => {
  const classes = counterPanelStyles()
  const { UnfulfillLength } = useCounter()
  const { auth, handleHideCounter } = props

  return (
    <div className={classes.header}>
      <Container style={{ position: "relative" }}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={4}>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                className={classes.center}
                variant="h4"
                color="primary"
              >
                {UnfulfillLength}
              </Typography>
              <Typography
                className={classes.center}
                variant="h5"
                color="primary"
              >
                Unfulfilled Help Request
              </Typography>
              {!auth && (
                <>
                  <Typography className={classes.title} variant="subtitle1">
                    To FulFilled or Request Help
                  </Typography>
                  <div className={classes.center}>
                    <Button
                      component={Link}
                      to="/auth/login"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      LogIn
                    </Button>
                    <Button
                      component={Link}
                      to="/auth/signup"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      SignUp
                    </Button>
                  </div>
                </>
              )}
              {auth && (
                <div className={classes.center}>
                  <IconButton
                    className={classes.hideIcon}
                    onClick={handleHideCounter("hideCounter", false)}
                  >
                    <ExpandLessIcon fontSize="large" />
                  </IconButton>
                </div>
              )}
            </Paper>
          </GridItem>
        </GridContainer>
      </Container>
    </div>
  )
}

CounterPanel.propTypes = propTypes
CounterPanel.defaultProps = defaultProps

export default CounterPanel
