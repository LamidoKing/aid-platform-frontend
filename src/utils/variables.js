import VisibilityIcon from "@material-ui/icons/Visibility"
import DoneIcon from "@material-ui/icons/Done"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import MouseIcon from "@material-ui/icons/Mouse"
import FulfilledIcon from "@material-ui/icons/EventAvailable"
import UnfulfiledIcon from "@material-ui/icons/EventBusy"
import OfflineIcon from "@material-ui/icons/GpsNotFixed"
import OnlineIcon from "@material-ui/icons/GpsFixed"
// import LockIcon from "@material-ui/icons/Lock"

// const user = [{ name: "Logout", icon: LockIcon }]

const users = [
  {
    id: 1,
    first_name: "lamido",
    last_name: "tijjani",
    email: "lamido@gmail.com",
    status: "offline",
  },
  {
    id: 2,
    first_name: "Alex",
    last_name: "Nicholos",
    email: "alex@gmail.com",
    status: "offline",
  },
  {
    id: 3,
    first_name: "Dan",
    last_name: "Carlos",
    email: "dan@gmail.com",
    status: "offline",
  },
  {
    id: 4,
    first_name: "Alex",
    last_name: "Joe",
    email: "alexjoe@gmail.com",
    status: "offline",
  },
]

const requests = [
  {
    id: 1,
    user_id: 1,
    title: "First Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "One Time Request",
    latitude: 9.074766556343297,
    longitude: 8.545882459436788,
    status: "Unfulfill",
    volunters: [],
  },
  {
    id: 2,
    user_id: 1,
    title: "Second Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "Material Need",
    latitude: 9.012380450912666,
    longitude: 8.860366102014913,
    status: "Unfulfill",
    volunters: [],
  },
  {
    id: 3,
    user_id: 1,
    title: "Third Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "One Time Request",
    latitude: 8.97440101933421,
    longitude: 8.335768934046163,
    status: "Fulfilled",
    volunters: [],
  },
  {
    id: 4,
    user_id: 1,
    title: "Fouth Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "Material Need",
    latitude: 9.190016633634391,
    longitude: 8.666732068811788,
    status: "Fulfilled",
    volunters: [],
  },
  {
    id: 5,
    user_id: 1,
    title: "firth Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "Material Need",
    latitude: 9.00152959143697,
    longitude: 8.653456894387736,
    status: "Unfulfill",
    volunters: [],
  },
  {
    id: 6,
    user_id: 1,
    title: "sixth Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "One Time Request",
    latitude: 9.188298363717408,
    longitude: 8.912725220419947,
    status: "Unfulfill",
    volunters: [
      { name: "Arancha varga" },
      { name: "Joe Sanches" },
      { name: "Dan Carlos" },
      { name: "Karen Daniel" },
      { name: "Veena Alex" },
    ],
  },
  {
    id: 7,
    user_id: 1,
    title: "seventh Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "Material Need",
    latitude: 9.518925647936346,
    longitude: 8.692998657919947,
    status: "Unfulfill",
    volunters: [],
  },
  {
    id: 8,
    user_id: 2,
    title: "Eighth Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "One Time Request",
    latitude: 9.486039399553169,
    longitude: 8.1900684830596,
    status: "Unfulfill",
    volunters: [
      { name: "lamido tijjani", user_id: 1 },
      { name: "Joe Sanches" },
      { name: "Dan Carlos" },
      { name: "Karen Daniel" },
      { name: "Veena Alex" },
    ],
  },
  {
    id: 9,
    user_id: 2,
    title: "nineth Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "Material Need",
    latitude: 9.02926961315038,
    longitude: 7.9827015397002254,
    status: "Unfulfill",
    volunters: [
      { name: "Joe Sanches" },
      { name: "Dan Carlos" },
      { name: "Karen Daniel" },
      { name: "Veena Alex" },
    ],
  },
  {
    id: 10,
    user_id: 2,
    title: "teenth Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "One Time Request",
    latitude: 9.397984827926342,
    longitude: 8.361729860012725,
    status: "Fulfilled",
    volunters: [],
  },
  {
    id: 11,
    user_id: 2,
    title: "eleventh Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "Material Need",
    latitude: 8.94016780253069,
    longitude: 8.767359647230156,
    status: "Fulfilled",
    volunters: [],
  },
  {
    id: 12,
    user_id: 2,
    title: "twelveth Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "Material Need",
    latitude: 9.173428854864788,
    longitude: 8.174097928480156,
    status: "Unfulfill",
    volunters: [
      { name: "Joe Sanches" },
      { name: "Dan Carlos" },
      { name: "Karen Daniel" },
    ],
  },
  {
    id: 13,
    user_id: 2,
    title: "thirdteenth Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "One Time Request",
    latitude: 9.26560627785781,
    longitude: 8.668482694105156,
    status: "Unfulfill",
    volunters: [],
  },
  {
    id: 14,
    user_id: 2,
    title: "fourteenth Request",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    type_of_request: "Material Need",
    latitude: 9.449888332405278,
    longitude: 7.575343045667657,
    status: "Unfulfill",
    volunters: [],
  },
]

const find = (objects, id) => {
  return objects.find((object) => id === object.id)
}

const messages = [
  {
    id: 1,
    sender_id: find(users, 2),
    receiver_id: find(users, 1),
    request_id: find(requests, 1),
    message: "ghghghhghgdffgfgh",
  },
  {
    id: 2,
    sender_id: find(users, 3),
    receiver_id: find(users, 1),
    request_id: find(requests, 1),
    message: "hello",
  },
  {
    id: 3,
    sender_id: find(users, 4),
    receiver_id: find(users, 1),
    request_id: find(requests, 1),
    message: "hello",
  },
  {
    id: 4,
    sender_id: find(users, 1),
    receiver_id: find(users, 2),
    request_id: find(requests, 11),
    message: "hello",
  },
  {
    id: 5,
    sender_id: find(users, 3),
    receiver_id: find(users, 2),
    request_id: find(requests, 11),
    message: "hello",
  },
  {
    id: 6,
    sender_id: find(users, 4),
    receiver_id: find(users, 2),
    request_id: find(requests, 12),
    message: "hello",
  },
  {
    id: 7,
    sender_id: find(users, 3),
    receiver_id: find(users, 1),
    request_id: find(requests, 2),
    message: "hello",
  },
  {
    id: 8,
    sender_id: find(users, 1),
    receiver_id: find(users, 3),
    request_id: find(requests, 1),
    message: "hellow",
  },
  {
    id: 9,
    sender_id: find(users, 4),
    receiver_id: find(users, 1),
    request_id: find(requests, 4),
    message: "ghghghhghgdffgfgh",
  },
  {
    id: 10,
    sender_id: find(users, 2),
    receiver_id: find(users, 1),
    request_id: find(requests, 1),
    message: "hello",
  },
  {
    id: 11,
    sender_id: find(users, 1),
    receiver_id: find(users, 2),
    request_id: find(requests, 1),
    message: "hi",
  },
  {
    id: 12,
    sender_id: find(users, 2),
    receiver_id: find(users, 1),
    request_id: find(requests, 1),
    message:
      "woow this s very very nice, its updated, clean and better than most tutorial, Thaks you very muchwoow this s very very nice, its updated, clean and better than most tutorial, Thaks you very much",
  },
  {
    id: 13,
    sender_id: find(users, 2),
    receiver_id: find(users, 1),
    request_id: find(requests, 1),
    message: "hello",
  },
  {
    id: 14,
    sender_id: find(users, 1),
    receiver_id: find(users, 2),
    request_id: find(requests, 1),
    message: "hi",
  },
  {
    id: 15,
    sender_id: find(users, 2),
    receiver_id: find(users, 1),
    request_id: find(requests, 1),
    message: "hello",
  },
  {
    id: 16,
    sender_id: find(users, 1),
    receiver_id: find(users, 2),
    request_id: find(requests, 1),
    message: "hi",
  },
]

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

export {
  users,
  mapOptions,
  fulfullHelp,
  helpRequest,
  requestList,
  chatList,
  requests,
  messages,
}
