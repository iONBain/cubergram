import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    avatar:"https://res.cloudinary.com/ionbain/image/upload/v1686804496/samples/cUBergram/avatars/man_2_h6wlwj.png",
    firstname: "Bhaskar",
    lastname: "Agrawal",
    username: "iONBain",
    password: "ba@neoG",
    bio:"make it happen!",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    avatar:"https://res.cloudinary.com/ionbain/image/upload/v1686804496/samples/cUBergram/avatars/woman_1_lxopnv.png",
    firstname: "Adarsh",
    lastname: "Balika",
    username: "adarshBalika",
    password: "adarshBalika123",
    bio:"be kind, be adarsh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    avatar:"https://res.cloudinary.com/ionbain/image/upload/v1686804699/samples/cUBergram/avatars/woman_2_rfmoqt.png",
    firstname: "neo",
    lastname: "Grammer",
    username: "neoGrammer",
    password: "neoG@neoG",
    bio:"scholar by day,coder by night",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    avatar:"https://res.cloudinary.com/ionbain/image/upload/v1686804496/samples/cUBergram/avatars/man_1_qkwqrq.png",
    firstname: "Tanay",
    lastname: "Pratap",
    username: "tanayBhaiya",
    password: "tanay@neoG",
    bio:"being the mentor I never had",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    avatar:"https://res.cloudinary.com/ionbain/image/upload/v1686804496/samples/cUBergram/avatars/man_kdrw4w.png",
    firstname: "Himanshu",
    lastname: "Patel",
    username: "himanshuPatel",
    password: "hp@asia",
    bio:"Frontend Developer",
    // website:"",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
