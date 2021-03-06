import React from "react"
import PropTypes from "prop-types"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import TimelineIcon from "@material-ui/icons/Timeline"
import UpdateIcon from "@material-ui/icons/Update"
import statCardStyles from "styles/components/statCardStyles"

const propTypes = {
  title: PropTypes.string,
  total: PropTypes.number,
}
const defaultProps = {
  title: "",
  total: 0,
}

const StatCard = (props) => {
  const classes = statCardStyles()
  const { title, total } = props

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<TimelineIcon />}
        title={
          <Typography variant="subtitle1" className={classes.white}>
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="h5" color="primary">
            {total}
          </Typography>
        }
        className={classes.cardHeader}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" color="primary">
          <UpdateIcon />
        </IconButton>
        <Typography variant="body2" className={classes.white}>
          At the last minute
        </Typography>
      </CardActions>
    </Card>
  )
}

StatCard.propTypes = propTypes
StatCard.defaultProps = defaultProps

export default StatCard
