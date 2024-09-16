import { Public } from "@mui/icons-material";

export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Boi",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Boi",
    _id: "2",
  },
];
export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Boi",
    },
    _id: "2",
  },
];

export const sampleMessages = [
  {
    content: "Hero ka msg hai",
    _id: "dadad",
    sender: {
      _id: "user._id",
      name: "chaman",
    },
    chat: "chatId",
    createdAt: "2024-01-01T00:00:00.000Z",
  },
  {
    attachments: [
      {
        public_id: "asasd2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "",
    _id: "dadada",
    sender: {
      _id: "asaadddada",
      name: "chaman",
    },
    chat: "chatId",
    createdAt: "2024-01-01T00:00:00.000Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      _id: "1",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "John Boi",
      _id: "2",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      username: "john_boi",
      friends: 25,
      groups: 7,
    },
  ],
  chats: [
    {
      name: "John group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        {
          _id: "1",
          avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        },
        {
          _id: "2",
          avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      },
    },
    {
      name: "dan group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: false,
      members: [
        {
          _id: "1",
          avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        },
        {
          _id: "2",
          avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      },
    },
  ],
  messages: [
    {
      attachments: [],
      content: "Hero ka msg hai",
      _id: "dadad",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "chaman",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-01-01T00:00:00.000Z",
    },
    {
      attachments: [{
        public_id: "asasd2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      }],
      content: "kuch bhi",
      _id: "dadada",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "aman",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-01-01T00:00:00.000Z",
    }
  ],
};
