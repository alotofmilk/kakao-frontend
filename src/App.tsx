import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import "./App.css";
import Friends from "./pages/Friends";
import { friends } from "./pages/Friends/data";

const App = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<string>("friends");

  const changeTab = (changedValue: string) => {
    setCurrentTab(changedValue);
  };

  return (
    <section>
      <Box sx={{ pb: 9 }}>{currentTab === "friends" && <Friends />}</Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Tabs centered variant="fullWidth" value={currentTab}>
          <Tab
            icon={<GroupIcon />}
            label="친구"
            value="friends"
            onClick={() => changeTab("friends")}
          />
          <Tab
            icon={<ChatIcon />}
            label="채팅"
            value="chats"
            onClick={() => changeTab("chats")}
          />
        </Tabs>
      </Paper>
    </section>
  );
};

export default App;
