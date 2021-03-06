import React from "react"
import PropTypes from "prop-types"
import { observer } from "mobx-react-lite"
import Badge from "@material-ui/core/Badge"
import Avatar from "@material-ui/core/Avatar"
import { withStyles } from "@material-ui/core/styles"
import avatarStyles from "styles/components/avatarStyles"

const defaultProps = {
  status: "offline",
  name: "A",
}

const propTypes = {
  status: PropTypes.string,
  name: PropTypes.string,
}

const StyledBadge = withStyles(() => ({
  badge: {
    backgroundColor: "green",
    color: "green",
    boxShadow: "0 0 0 2px green",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge)

const AvatarComponent = observer((props) => {
  const classes = avatarStyles()
  const { status, name } = props

  const title = name.split("")[0].toUpperCase()

  return (
    <div className={classes.root}>
      {status === "online" ? (
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar color="secondary" className={classes.avatar}>
            {title}
          </Avatar>
        </StyledBadge>
      ) : (
        <Badge
          color="error"
          overlap="circle"
          badgeContent=" "
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar color="secondary" className={classes.avatar}>
            {title}
          </Avatar>
        </Badge>
      )}
    </div>
  )
})

AvatarComponent.defaultProps = defaultProps
AvatarComponent.propTypes = propTypes

export default AvatarComponent
