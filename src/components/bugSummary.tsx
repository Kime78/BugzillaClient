import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Bug } from "./bugList";
import { useNavigate } from "react-router-dom";

const BugSummary = ({ bug }: { bug: Bug }) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(bug.last_change_time!));
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        marginBottom: "16px",
        marginTop: "16px",
        backgroundColor: "#e8e9eb",
      }}
    >
      <CardActionArea onClick={() => navigate(`/bug/${bug.id}`)}>
        <CardContent>
          <Typography variant="h5" component="div">
            {bug.summary}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "8px" }}
          >
            <strong>Creator:</strong> {bug.creator}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "8px" }}
          >
            <strong>Last Changed:</strong> {formattedDate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BugSummary;
