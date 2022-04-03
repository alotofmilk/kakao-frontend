import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

type ChatLatestStatusType = {
  message: string;
  count?: number;
};

const ChatLatestStatus = (props: ChatLatestStatusType): JSX.Element => {
  const { message, count } = props;
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>{message}</Typography>
        {count && <Chip color="error" label={count} />}
      </Box>
    </>
  );
};

export default ChatLatestStatus;
