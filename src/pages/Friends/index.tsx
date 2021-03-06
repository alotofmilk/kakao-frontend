import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton, TextField, Box, IconButton } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { friends } from "./data";
import { ChangeEvent, MouseEvent, useState, useEffect } from "react";
import { Container, Grid, Modal } from "@mui/material";
import FriendAdd from "./components/FriendAdd";
import axios from "axios";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

type FriendType = {
  id: number;
  name: string;
  statusMessage: string;
};

const Friends = (): JSX.Element => {
  const [originalFriends, setOriginalFriends] = useState<FriendType[]>([]);
  const [friendList, setFriendList] = useState(friends);
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  const changeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.currentTarget.value;
    if (inputText.length === 0) {
      setFriendList(originalFriends);
    } else {
      const filteredFriends = friends.filter((friend) =>
        friend.name.includes(inputText)
      );
      setFriendList(filteredFriends);
    }
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const getFriendList = async () => {
    const { data } = await axios.get<FriendType[]>(
      "http://localhost:5000/friends/1"
    );
    setOriginalFriends(data);
    setFriendList(data);
  };

  const finishAddFriend = async () => {
    await getFriendList();
    closeModal();
  };

  const openMenu = (event: MouseEvent<HTMLDivElement>) => {
    setAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchor(null);
  };

  useEffect(() => {
    getFriendList();
  }, []);

  return (
    <Container>
      <Modal open={open} onClose={closeModal}>
        <FriendAdd callback={finishAddFriend} />
      </Modal>
      <Menu
        open={anchor !== null}
        anchorEl={anchor}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <MenuItem>????????????</MenuItem>
      </Menu>
      <Box>
        <Grid container>
          <Grid item xs={10.5}>
            <TextField
              label="?????? ??????"
              variant="outlined"
              fullWidth
              margin="dense"
              onChange={changeSearchText}
            />
          </Grid>
          <Grid item xs={1.5}>
            <Box sx={{ p: "8px" }}>
              <IconButton color="primary" size="large" onClick={openModal}>
                <PersonAddIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <List>
        {friendList.map((friend) => {
          return (
            <ListItemButton key={friend.id} onClick={openMenu}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={friend.name}
                secondary={friend.statusMessage}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Container>
  );
};

export default Friends;
