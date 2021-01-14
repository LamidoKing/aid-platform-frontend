import React from "react"
import PropTypes from "prop-types"
import GridContainer from "Components/Grid/GridContainer"
import GridItem from "Components/Grid/GridItem"
import StatCard from "Components/StatCard/StatCard"
import Typography from "@material-ui/core/Typography"
import statsCardSection from "styles/pages/statsCardSection"

const propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]),
  title: PropTypes.string,
}
const defaultProps = {
  data: [],
  title: "",
}

const StatsCardSection = (props) => {
  const classes = statsCardSection()
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
              <StatCard title={item.title} total={item.total} />
            </GridItem>
          )
        })}
      </GridContainer>
    </>
  )
}

StatsCardSection.propTypes = propTypes
StatsCardSection.defaultProps = defaultProps

export default StatsCardSection
