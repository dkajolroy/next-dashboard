import {
  arrowLeft,
  bill,
  boxItem,
  doller,
  inbox,
  person,
  personGroup,
  setting,
  shopingbag,
} from "./icons";

export const applist = [
  {
    name: "Sales",
    icon: shopingbag(),
    pathname: "/",
  },
  {
    name: "Users",
    icon: personGroup(),
    pathname: "/",
  },
  {
    name: "Inbox",
    icon: inbox(),
    pathname: "/",
  },
  {
    name: "Profile",
    icon: person(),
    pathname: "/",
  },
  {
    name: "Settings",
    icon: setting(),
    pathname: "/",
  },
  {
    name: "Products",
    icon: boxItem(),
    pathname: "/",
  },
  {
    name: "Pricing",
    icon: doller(),
    pathname: "/",
  },
  {
    name: "Billing",
    icon: bill(),
    pathname: "/",
  },
  {
    name: "Logout",
    icon: arrowLeft(),
    pathname: "/",
  },
];
