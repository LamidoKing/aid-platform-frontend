/* eslint-disable no-unused-vars */
import React from "react"
import { observer } from "mobx-react-lite"
import { useStores, useCounter } from "hooks"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import GridContainer from "Components/Grid/GridContainer"
import GridItem from "Components/Grid/GridItem"
import { makeStyles } from "@material-ui/core/styles"
import Chart from "./Sections/Charts"
import ChartCardSection from "./Sections/ChartCardSection"

const statstyles = makeStyles(() => ({
  paper: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "30px 50px 10px 50px",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    margin: "20px 0px",
  },
}))
const Stats = observer(() => {
  const classes = statstyles()
  const {
    request,
    myRequestsLength,
    UnfulfillLength,
    fullfilledLength,
    myUnfulfillLength,
    myfullfilledLength,
  } = useCounter()

  const allStats = [
    { title: "Total Request", total: request },
    { title: "Total Unfulfill Request", total: UnfulfillLength },
    { title: "Total Fulfill Request", total: fullfilledLength },
  ]

  const myStats = [
    { title: "Total Request", total: myRequestsLength },
    { title: "Total Unfulfill Request", total: myUnfulfillLength },
    { title: "Total Fulfill Request", total: myfullfilledLength },
  ]

  return (
    <Container style={{ position: "relative" }}>
      <div style={{ width: "100%" }}>
        <Paper className={classes.paper} elevation={3}>
          <ChartCardSection data={allStats} title="All Request Statistic" />
          <ChartCardSection data={myStats} title="My Request Statistic" />
        </Paper>
      </div>
    </Container>
  )
})

export default Stats
