import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const posts = [
  {
    _id: uuid(),
    textPost:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        username:"ionbain",
        comment:"That's amazing speed, keep it down :)"
      }
    ],
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    caption:"New Rubiks' Cube average World Record was set by the Chinese Yiheng Wang with 4.69 seconds at the Yong Jun KL Speedcubing 2023 championship on March 12. He is only 8 years old",  
    imageURL:"https://res.cloudinary.com/dpbovnhfi/image/upload/v1686374323/samples/cUBergram/posts/p1_xzrge6.jpg",
    likes: {
      likeCount: 18,
      likedBy: [],
      dislikedBy: [],
    },
    username: "iONBain",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    caption:
      "This year we celebrated Christmas with a Santa Claus Rubik's Cube shape mod, created with a 3D pen.",
    imageURL:"https://res.cloudinary.com/dpbovnhfi/image/upload/v1686374323/samples/cUBergram/posts/p2_sltbgc.jpg",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "iONBain",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    caption:
     "Just another Rubik's Cube solver, Cube-Solver.com is an online 2x2, 3x3, 4x4, 5x5 and other bigger NxNxN cube solver and simulator runs in your web browser.",
    imageURL:"https://res.cloudinary.com/dpbovnhfi/image/upload/v1686374324/samples/cUBergram/posts/p3_qwss6m.jpg",
    likes: {
      likeCount: 22,
      likedBy: [],
      dislikedBy: [],
    },
    username: "iONBain",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
      _id: uuid(),
      textPost: "The youngest champion Li Dongyi was only 9 years old when he set a new world record and completed the puzzle in just 11.84 seconds.",
      likes: {
        likeCount: 9,
        likedBy: [],
        dislikedBy: [],
      },
      comments: [
        {
          username: "neoGrammer",
          comment: "Great post! Keep it up!",
        },
        {
          username: "tanayBhaiya",
          comment: "I love your content!",
        },
      ],
      username: "iONBain",
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      textPost: "Just found out that any colour combination in the classic Rubik's Cube can be solved in 20 moves or less. Can you believe that?",
      likes: {
        likeCount: 18,
        likedBy: [],
        dislikedBy: [],
      },
      comments: [
        {
          username: "himanshuPatel",
          comment: "Wow, this is fascinating!",
        },
        {
          username: "adarshBalika",
          comment: "Didn't knew! Is it possible?",
        },
      ],
      username: "tanayBhaiya",
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      caption:"Nova Scotia teen Saul Hafting has bounced his way to victory after breaking the Guinness World Record for the most Rubik's cubes solved while on a pogo stick.",
      imageURL: "https://res.cloudinary.com/dpbovnhfi/image/upload/v1686375141/samples/cUBergram/posts/p6_zaaaso.webp",
      likes: {
        likeCount: 12,
        likedBy: [],
        dislikedBy: [],
      },
      comments: [
        {
          username: "tanayBhaiya",
          comment: "Impressive work!",
        },
        {
          username: "neoGrammer",
          comment: "Keep it going!",
        },
      ],
      username: "himanshuPatel",
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      caption:"Rubik's Cube has been bought by Toronto-based toymaker Spin Mister in a US$50-million acquisition after the company first announced its plan to make the purchase last fall.",
      imageURL: "https://res.cloudinary.com/dpbovnhfi/image/upload/v1686375141/samples/cUBergram/posts/p7_czglei.webp",
      likes: {
        likeCount: 12,
        likedBy: [],
        dislikedBy: [],
      },
      comments: [
        {
          username: "tanayBhaiya",
          comment: "Impressive work!",
        },
        {
          username: "neoGrammer",
          comment: "Keep it going!",
        },
      ],
      username: "himanshuPatel",
      createdAt: formatDate(),
      updatedAt: formatDate(),
    },
    {
      _id: uuid(),
      caption:"A teenage boy in China has broken a world record for the fastest time to solve three Rubik’s Cubes simultaneously with both hands and feet, according to a Guinness World Records (GWR) media handout released on Nov. 8 to coincide with GWR Day.",
      imageURL: "https://res.cloudinary.com/dpbovnhfi/image/upload/v1686375141/samples/cUBergram/posts/p8_mddsnm.webp",
      likes: {
        likeCount: 12,
        likedBy: [],
        dislikedBy: [],
      },
      comments: [
        {
          username: "tanayBhaiya",
          comment: "Impressive work!",
        },
        {
          username: "neoGrammer",
          comment: "Keep it going!",
        },
      ],
      username: "himanshuPatel",
      createdAt: formatDate(),
      updatedAt: formatDate(),
    }
];
