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
import OfflineIcon from "@material-ui/icons/GpsNotFixed"
import OnlineIcon from "@material-ui/icons/GpsFixed"

const propTypes = {
  title: PropTypes.string,
  titleIcon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  itemList: PropTypes.oneOfType([PropTypes.array]),
  handleItemClick: PropTypes.func,
}

const defaultProps = {
  title: "title",
  itemList: [],
  handleItemClick: () => {},
}

const DrawerList = (props) => {
  const classes = listStyles()
  const { title, titleIcon: TitleIcon, itemList, handleItemClick } = props
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const name = (item) => {
    if (title === "Chats") {
      return `${item.first_name} ${item.last_name}`
    }
    if (title === "Volunters") {
      return `${item.first_name} ${item.last_name}`
    }
    return item.name
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
            <List
              component="div"
              disablePadding
              key={
                title === "Chats" || title === "Volunters" ? item.id : item.name
              }
            >
              <ListItem
                button
                onClick={() => handleItemClick(item, title)}
                className={classes.nested}
              >
                <ListItemText
                  primary={name(item)}
                  className={classes.listText}
                />
                {item.icon && (
                  <ListItemIcon className={classes.listText}>
                    <Tooltip
                      title={item.status ? item.status : item.name}
                      aria-label={item.status ? item.status : item.name}
                      arrow
                    >
                      <item.icon
                        className={clsx(
                          item.status === "offline" && classes.offlineColor
                        )}
                      />
                    </Tooltip>
                  </ListItemIcon>
                )}
                {title === "Chats" && (
                  <ListItemIcon className={classes.listText}>
                    <Tooltip
                      title={item.status ? item.status : item.name}
                      aria-label={item.status ? item.status : item.name}
                      arrow
                    >
                      {item.status === "offline" ? (
                        <OfflineIcon
                          className={clsx(
                            item.status === "offline" && classes.offlineColor
                          )}
                        />
                      ) : (
                        <OnlineIcon
                          className={clsx(
                            item.status === "offline" && classes.offlineColor
                          )}
                        />
                      )}
                    </Tooltip>
                  </ListItemIcon>
                )}
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
