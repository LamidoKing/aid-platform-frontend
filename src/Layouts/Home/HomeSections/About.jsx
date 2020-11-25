import React from "react"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AidIcon from "@material-ui/icons/SportsKabaddi"
import aboutStyles from "styles/layouts/homeSection/abountStyles"

const About = () => {
  const classes = aboutStyles()
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.icon}>
          <AidIcon color="primary" fontSize="large" />
        </div>
        <Typography className={classes.title} variant="h5">
          Aid Platform
        </Typography>
        <Typography className={classes.body} variant="body1">
          Aid is a Map Base Digital Platform that connects Peaople in need of
          help in the Local, National, or international community to Individual
          or Organisation Willing to help. The platform users can request for
          help or fulfilled help requested by Others
        </Typography>
      </Paper>
    </>
  )
}

export default About
