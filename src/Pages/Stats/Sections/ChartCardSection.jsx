import React from "react"
import PropTypes from "prop-types"
import GridContainer from "Components/Grid/GridContainer"
import GridItem from "Components/Grid/GridItem"
import ChartCard from "Components/ChartCard/ChartCard"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  title: {
    textAlign: "center",
    margin: "20px 0px",
  },
}))
const propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]),
  title: PropTypes.string,
}
const defaultProps = {
  data: [],
  title: "",
}

const ChartCardSection = (props) => {
  const classes = useStyles()
  const { data, title } = props
  return (
    <>
      <Typography variant="h6" color="primary" className={classes.title}>
        {title}
      </Typography>
      <GridContainer justify="center">
        {data.map((item) => {
          return (
            <GridItem xs={12} sm={6} md={4} key={item.title}>
              <ChartCard title={item.title} total={item.total} />
            </GridItem>
          )
        })}
      </GridContainer>
    </>
  )
}

ChartCardSection.propTypes = propTypes
ChartCardSection.defaultProps = defaultProps

export default ChartCardSection
