import React from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import TimeLine from "Components/Timeline/CustomTimeline"
import { Variables } from "utils"
import howItWorksStyles from "styles/layouts/homeSection/howItWorksStyles"

const HowItWorks = () => {
  const classes = howItWorksStyles()

  return (
    <Paper elevation={3} className={classes.rootPaper}>
      <Typography variant="h5" color="primary" className={classes.title}>
        How It Works
      </Typography>
      <TimeLine array={Variables.fulfullHelp} title="Help" />
      <TimeLine array={Variables.helpRequest} title="Request Help" />
    </Paper>
  )
}

export default HowItWorks
