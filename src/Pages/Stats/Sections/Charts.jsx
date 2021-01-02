/* eslint-disable no-unused-vars */
import React from "react"
import GridContainer from "Components/Grid/GridContainer"
import GridItem from "Components/Grid/GridItem"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core"
import { PieChart, Pie, Sector, Cell } from "recharts"

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
]

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px",
}

const Charts = () => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <div>
      <PieChart width={300} height={200}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={100}
          cy={100}
          outerRadius={80}
          fill="#8884d8"
        />
      </PieChart>
    </div>
  )
}

export default Charts
