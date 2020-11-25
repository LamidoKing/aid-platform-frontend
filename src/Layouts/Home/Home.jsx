import React from "react"
import Container from "@material-ui/core/Container"
import GridContainer from "Components/Grid/GridContainer"
import GridItem from "Components/Grid/GridItem"
import Map from "Components/Map/Map"
import CounterPanel from "Components/CounterPanel/CounterPanel"
import homeStyles from "styles/layouts/homeStyles"
import HowItWorks from "./HomeSections/HowItWorks"
import About from "./HomeSections/About"

const Home = () => {
  const classes = homeStyles()
  return (
    <>
      <Map>
        <>
          <CounterPanel />
          <div className={classes.children}>
            <Container style={{ position: "relative" }}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                  <About />
                  <HowItWorks />
                </GridItem>
              </GridContainer>
            </Container>
          </div>
        </>
      </Map>
    </>
  )
}

export default Home
