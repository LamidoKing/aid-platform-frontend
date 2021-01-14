import VisibilityIcon from "@material-ui/icons/Visibility"
import DoneIcon from "@material-ui/icons/Done"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import MouseIcon from "@material-ui/icons/Mouse"
import FulfilledIcon from "@material-ui/icons/EventAvailable"
import UnfulfiledIcon from "@material-ui/icons/EventBusy"
import OfflineIcon from "@material-ui/icons/GpsNotFixed"
import OnlineIcon from "@material-ui/icons/GpsFixed"
import LockIcon from "@material-ui/icons/Lock"

const user = [{ name: "Logout", icon: LockIcon }]

const fulfullHelp = [
  {
    step: "step one",
    title: "View",
    body: "View the help by clicking the maker ",
    icon: VisibilityIcon,
  },
  {
    step: "step two",
    title: "Chat",
    body: "chat with Requester how to fulfull the request",
    icon: ChatBubbleOutlineIcon,
  },
  {
    step: "step three",
    title: "Fulfilled",
    body: "When request fulfulled mark as Done",
    icon: DoneIcon,
  },
]
const helpRequest = [
  {
    step: "step one",
    title: "New",
    body: "click new request and follow the instruction",
    icon: MouseIcon,
  },
  {
    step: "step two",
    title: "Done",
    body: "its done, your request will appear on the map and dashbord",
    icon: DoneIcon,
  },
]

const requestList = [
  { name: "Fulfilled", icon: FulfilledIcon },
  { name: "Unfulfill", icon: UnfulfiledIcon },
]

const chatList = [
  {
    name: "Alex Joe",
    linkTo: "/pages/page1",
    icon: OfflineIcon,
    status: "offline",
  },
  {
    name: "Dan Carlos",
    linkTo: "/pages/page2",
    icon: OnlineIcon,
    status: "online",
  },
]

const mapOptions = {
  styles: [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#523735",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f1e6",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#c9b2a6",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#dcd2be",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ae9e90",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#93817c",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#a5b076",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#447530",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f1e6",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#fdfcf8",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#f8c967",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#e9bc62",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#e98d58",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#db8555",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#806b63",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8f7d77",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#b9d3c2",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#92998d",
        },
      ],
    },
  ],
}

export { mapOptions, user, fulfullHelp, helpRequest, requestList, chatList }
