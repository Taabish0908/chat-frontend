import {
  CalendarMonth as CalendarIcon,
  Face as FaceIcon,
  AlternateEmail as UserNamIcon,
} from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { transformImage } from "../../lib/features";

const Profile = ({ user }) => {
  return (
    <div>
      <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar
          src={transformImage(user?.avatar?.url)}
          sx={{
            width: 200,
            height: 200,
            objectFit: "contain",
            marginBottom: "1rem",
            border: "5px solid white",
          }}
        />
        <ProfileCard heading={"Bio"} text={user?.bio} />
        <ProfileCard
          heading={"UserName"}
          text={user?.userName}
          Icon={<UserNamIcon />}
        />
        <ProfileCard heading={"Name"} text={user?.name} Icon={<FaceIcon />} />
        <ProfileCard
          heading={"Joined"}
          text={moment(user?.createdAt).fromNow()}
          Icon={<CalendarIcon />}
        />
        {/* <ProfileCard heading={"Joined"} text={moment('2024-01-01T18:30:00.000Z').fromNow()} Icon={<CalendarIcon />} /> */}
      </Stack>
    </div>
  );
};
const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="body1">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
