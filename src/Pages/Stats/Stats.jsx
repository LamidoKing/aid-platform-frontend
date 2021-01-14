import React from "react"
import { observer } from "mobx-react-lite"
import { useCounter } from "hooks"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import statsStyles from "styles/pages/statsStyles"
import StatsCardSection from "./Sections/StatsCardSection"

const Stats = observer(() => {
  const classes = statsStyles()
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
          <StatsCardSection data={allStats} title="All Request Statistic" />
          <StatsCardSection data={myStats} title="My Request Statistic" />
        </Paper>
      </div>
    </Container>
  )
})

export default Stats
