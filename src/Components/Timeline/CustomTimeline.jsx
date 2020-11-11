import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    padding: "20px 10px 0px",
    textAlign: "center",
    color: "white",
  },
  dot: {
    color: "white",
  },
}))

const propTypes = {
  array: PropTypes.oneOfType([PropTypes.array]).isRequired,
  title: PropTypes.string.isRequired,
}

const CustomizedTimeline = (props) => {
  const classes = useStyles()
  const { array, title } = props

  return (
    <>
      <Typography variant="subtitle1" className={classes.title}>
        {title}
      </Typography>
      <Timeline align="alternate">
        {array.map((item) => {
          return (
            <TimelineItem key={item.step}>
              <TimelineOppositeContent>
                <Typography variant="body2" className={classes.dot}>
                  {item.step}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary">
                  <item.icon color="primary" className={classes.dot} />
                </TimelineDot>
                {array[array.length - 1] !== item && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    {item.title}
                  </Typography>
                  <Typography>{item.body}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </>
  )
}

CustomizedTimeline.propTypes = propTypes

export default CustomizedTimeline
