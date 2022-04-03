import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const ChatDetail = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "calc(100vh - 80px)",
      }}
    >
      <Stack
        spacing={1}
        sx={{
          overflowY: "scroll",
          overflowX: "hidden",
          height: "calc(100vh - 160px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            pl: "5px",
            pr: "5px",
          }}
        >
          <Box>
            <Typography variant="caption">2022-04-01 18:00:00</Typography>
            <Paper
              elevation={1}
              sx={{
                display: "inline-block",
                padding: "10px",
                maxWidth: "60%",
                backgroundColor: "fff712",
                borderRadius: "20px",
              }}
            >
              <Typography variant="body2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: "헬로asfasf<br />ㄴㅇㄹㄴㄹ",
                  }}
                ></span>
              </Typography>
            </Paper>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            pl: "5px",
            pr: "5px",
          }}
        >
          <Box>
            <Paper
              elevation={1}
              sx={{
                display: "inline-block",
                padding: "10px",
                maxWidth: "60%",
                backgroundColor: "#e8e8e8",
                borderRadius: "20px",
              }}
            ></Paper>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
