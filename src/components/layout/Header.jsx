import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Backdrop,
  Badge,
} from "@mui/material";
import React, { lazy, useState } from "react";
import { orange } from "../../constants/color";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
// import SearchDialog from "../specific/Search";
const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../dialogs/NewGroup"));
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { userNotExists } from "../../redux/reducers/auth";
import { server } from "../../constants/config";
import {
  setIsMobile,
  setIsNewGroup,
  setIsNotification,
  setIsSearch,
} from "../../redux/reducers/misc";
import { resetNotificationCount } from "../../redux/reducers/chat";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSearch, isNotification, isNewGroup } = useSelector((state) => state.misc);
  const { notificationCount } = useSelector((state) => state.chat);
  // console.log("notificationCount", notificationCount);

  // const [isSearch, setIsSearch] = useState(false);
  // const [isNewGroup, setIsNewGroup] = useState(false);
  // const [isNotification, setIsNotification] = useState(false);
  const handleMobile = () => dispatch(setIsMobile(true));
  const openSearch = () => dispatch(setIsSearch(true));

  const openNewGroup = () => {
    // setIsNewGroup((prev) => !prev);
    dispatch(setIsNewGroup(true));
  };

  // const openNotification = () => {
  //   setIsNotification((prev) => !prev);
  // };

  const openNotification = () => {
    dispatch(setIsNotification(true))
    dispatch(resetNotificationCount(false));
  }
  const navigateToGroup = () => {
    navigate("/groups");
  };
  const logOutHandler = async () => {
    try {
      const { data } = await axios.get(`${server}/api/v1/user/logout`, {
        withCredentials: true,
      });
      dispatch(userNotExists(false));
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          {" "}
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chattu
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                {" "}
                <MenuIcon />{" "}
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearch}
              />
              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title={"Manage Group"}
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />
              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotification}
                value={notificationCount}
              />
              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logOutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          {" "}
          <SearchDialog />{" "}
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          {" "}
          <NotificationDialog />{" "}
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          {" "}
          <NewGroupDialog />{" "}
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick, value }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {value ? (
          <Badge badgeContent={value} color="error">
            {icon}
          </Badge>
        ) : (
          icon
        )}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
