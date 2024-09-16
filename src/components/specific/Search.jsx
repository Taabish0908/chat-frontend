import { useInputValidation } from "6pp";
import { Search as S } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAsyncMutation } from "../../hooks/hook";
import {
  useLazySearchUserQuery,
  useSendFriendRequestMutation,
} from "../../redux/api/api";
import { setIsSearch } from "../../redux/reducers/misc";
import UserItems from "../shared/UserItems";

const Search = () => {
  const { isSearch } = useSelector((state) => state.misc);
  const [searchUser] = useLazySearchUserQuery();
  const [sendFriendRequest, isLoadingSendingFreindRequest] = useAsyncMutation(
    useSendFriendRequestMutation
  );
  const dispatch = useDispatch();
  const search = useInputValidation("");
  const [users, setUsers] = useState([]);
  // let isLoadingSendingFreindRequest = false;
  const addFriendHandler = async (id) => {
    await sendFriendRequest("Snding Friend Request", { userId: id });
  };
  const searchCLoseHandler = () => dispatch(setIsSearch(false));

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      searchUser(search.value)
        .then(({ data }) => setUsers(data.users))
        .catch((err) => console.log(err));
    }, 1000);

    return () => clearTimeout(timeOutId);
  }, [search.value]);
  return (
    <div>
      <Dialog open={isSearch} onClose={searchCLoseHandler}>
        <Stack p={"2rem"} direction={"column"} width={"25rem"}>
          <DialogTitle textAlign={"center"}>Find People</DialogTitle>
          <TextField
            label=""
            value={search.value}
            onChange={search.changeHandler}
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <S />
                </InputAdornment>
              ),
            }}
          />
          <List>
            {users?.map((i) => (
              <UserItems
                user={i}
                key={i._id}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingSendingFreindRequest}
              />
            ))}
          </List>
        </Stack>
      </Dialog>
    </div>
  );
};

export default Search;
