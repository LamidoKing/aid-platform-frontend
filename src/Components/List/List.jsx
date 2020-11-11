import React, { useState } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import Tooltip from "@material-ui/core/Tooltip"
import listStyles from "styles/components/listStyles"

const propTypes = {
  title: PropTypes.string,
  titleIcon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  itemList: PropTypes.oneOfType([PropTypes.array]).isRequired,
  handleItemClick: PropTypes.func,
}

const defaultProps = {
  title: "title",
  handleItemClick: () => {},
}

const DrawerList = (props) => {
  const classes = listStyles()
  const { title, titleIcon: TitleIcon, itemList, handleItemClick } = props
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick} className={classes.listText}>
        <ListItemIcon className={classes.titleColor}>
          <TitleIcon />
        </ListItemIcon>
        <ListItemText primary={title} className={classes.titleColor} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {itemList.map((item) => {
          return (
            <List component="div" disablePadding key={item.name}>
              <ListItem
                button
                onClick={() => handleItemClick(item.linkTo)}
                className={classes.nested}
              >
                <ListItemText
                  primary={item.name}
                  className={classes.listText}
                />
                <ListItemIcon className={classes.listText}>
                  <Tooltip
                    title={item.status === "offline" ? "offline" : "online"}
                    aria-label={
                      item.status === "offline" ? "offline" : "online"
                    }
                    arrow
                  >
                    <item.icon
                      className={clsx(
                        item.status === "offline" && classes.offlineColor
                      )}
                    />
                  </Tooltip>
                </ListItemIcon>
              </ListItem>
            </List>
          )
        })}
      </Collapse>
    </List>
  )
}

DrawerList.propTypes = propTypes
DrawerList.defaultProps = defaultProps

export default DrawerList
