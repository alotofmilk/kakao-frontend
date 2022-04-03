import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ChatTitle from "./ChatTitle";
import ChatLatestStatus from "./ChatLatestStatus";

const ChatList = (): JSX.Element => {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<ChatTitle name={""} date={undefined}></ChatTitle>}
            secondary={<ChatLatestStatus message={""}></ChatLatestStatus>}
          ></ListItemText>
        </ListItem>
      </List>
    </>
  );
};

export default ChatList;
