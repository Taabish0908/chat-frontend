import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { useErrors } from "../../hooks/hook";
import {
  useAcceptFriendRequestMutation,
  useGetNotificationsQuery,
} from "../../redux/api/api";
import { useDispatch, useSelector } from "react-redux";
import { setIsNotification } from "../../redux/reducers/misc";
import toast from "react-hot-toast";

const Notifications = () => {
  const { isNotification } = useSelector((state) => state.misc);
  const dispatch = useDispatch();
  const { isLoading, data, error, isError } = useGetNotificationsQuery();
  const [acceptRequest] = useAcceptFriendRequestMutation();
  const frinedRequestHandler = async ({ _id, accept }) => {
    dispatch(setIsNotification(false));
    try {
      const res = await acceptRequest({ requestId: _id, accept });
      if (res?.data?.success) {
        // console.log("use socket here");
        toast.success(res?.data?.message);
      } else toast.error(res?.data?.message || "Something went wrong");
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
  const closeHandler = () => dispatch(setIsNotification(false));
  useErrors([{ error, isError }]);
  // console.log(data?.allRequest);
  return (
    <div>
      <Dialog open={isNotification} onClose={closeHandler}>
        <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
          <DialogTitle>Notification</DialogTitle>
          {isLoading ? (
            <Skeleton />
          ) : (
            <>
              {data?.allRequest?.length > 0 ? (
                data?.allRequest.map(({ sender, _id }) => (
                  <NotificationItem
                    sender={sender}
                    _id={_id}
                    handler={frinedRequestHandler}
                    key={_id}
                  />
                ))
              ) : (
                <Typography textAlign={"center"}>0 Notifications</Typography>
              )}
            </>
          )}
        </Stack>
      </Dialog>
    </div>
  );
};
const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <div>
      <ListItem>
        <Stack
          direction={"row"}
          spacing={"1rem"}
          alignItems={"center"}
          width={"100%"}
        >
          <Avatar />
          <Typography
            variant="body1"
            sx={{
              flexGlow: 1,
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
            }}
          >
            {`${name} sent you a friend request.`}
          </Typography>
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
          >
            <Button onClick={() => handler({ _id, accept: true })}>
              Accept
            </Button>
            <Button
              color="error"
              onClick={() => handler({ _id, accept: false })}
            >
              Reject
            </Button>
          </Stack>
        </Stack>
      </ListItem>
    </div>
  );
});

export default Notifications;
