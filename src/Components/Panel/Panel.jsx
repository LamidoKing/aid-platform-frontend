import React, { useState } from "react"
import PropTypes from "prop-types"
import { observer } from "mobx-react-lite"
import clsx from "clsx"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionActions from "@material-ui/core/AccordionActions"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import Fab from "Components/Fab/Fab"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import PublishIcon from "@material-ui/icons/Publish"
import panelStyles from "styles/components/panelStyles"

const propTypes = {
  requests: PropTypes.oneOfType([PropTypes.array]).isRequired,
  currentUser: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleRepublish: PropTypes.func.isRequired,
  handleFulfilled: PropTypes.func.isRequired,
}

const Panel = observer((props) => {
  const classes = panelStyles()
  const {
    requests,
    currentUser,
    handleDelete,
    handleEdit,
    handleRepublish,
    handleFulfilled,
  } = props
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      {requests.length === 0 ? (
        <Accordion
          TransitionProps={{ unmountOnExit: true }}
          className={classes.accordion}
          expanded={expanded === 1}
          onChange={handleChange(1)}
        >
          <AccordionDetails style={{ justifyContent: "center" }}>
            <Typography className={classes.white}>
              You Have No Request In This Category
            </Typography>
          </AccordionDetails>
        </Accordion>
      ) : (
        requests.map((request) => {
          return (
            <Accordion
              TransitionProps={{ unmountOnExit: true }}
              key={request.id}
              className={classes.accordion}
              expanded={expanded === request.id}
              onChange={handleChange(request.id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div className={classes.column}>
                  <Typography className={classes.heading} color="primary">
                    {request.title}
                  </Typography>
                </div>
                <div className={classes.column}>
                  <Typography
                    className={classes.secondaryHeading}
                    color="primary"
                  >
                    {request.type_of_request}
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.white}>
                  {request.description}
                </Typography>
              </AccordionDetails>
              <AccordionDetails className={classes.details}>
                <div className={classes.column}>
                  <Typography className={classes.heading}>
                    Latitude:{" "}
                    <span className={classes.white}>{request.latitude}</span>
                  </Typography>
                  <br />
                  <Typography className={classes.heading}>
                    Longitude:{" "}
                    <span className={classes.white}>{request.longitude}</span>
                  </Typography>
                </div>
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="h6">
                    Status:{" "}
                    <span className={classes.white}>{request.status}</span>
                    <br />
                  </Typography>
                  {request.status === "Unfulfill" && (
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className={classes.button}
                      onClick={() => handleFulfilled(request)}
                    >
                      mark as fulfill
                    </Button>
                  )}
                </div>
              </AccordionDetails>
              <Divider />
              <AccordionActions>
                {request.status === "Unfulfill" &&
                  request.user.id === currentUser.id && (
                    <>
                      {request.volunters.length > 4 && (
                        <Fab
                          arial="republish"
                          Icon={PublishIcon}
                          handleClick={() => handleRepublish(request)}
                        />
                      )}

                      <Fab
                        arial="Edit"
                        Icon={EditIcon}
                        handleClick={() => handleEdit(request)}
                      />
                      <Fab
                        arial="Delete"
                        Icon={DeleteIcon}
                        handleClick={() => handleDelete(request)}
                      />
                    </>
                  )}
              </AccordionActions>
            </Accordion>
          )
        })
      )}
    </div>
  )
})

Panel.propTypes = propTypes

export default Panel
