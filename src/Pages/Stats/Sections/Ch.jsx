/* eslint-disable no-unused-vars */
import React from "react"
import GridContainer from "Components/Grid/GridContainer"
import GridItem from "Components/Grid/GridItem"
import { Pie } from "react-chartjs-2"

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
}

const Polars = () => (
  <>
    <div style={{ width: "fit-content" }}>
      <Pie data={data} />
    </div>
  </>
)

export default Polars
