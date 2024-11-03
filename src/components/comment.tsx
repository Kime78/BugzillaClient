import { Paper, Typography } from "@mui/material";
import { components } from "../generated/bugzilla";

const CommentCard = ({
  comment,
}: {
  comment: components["schemas"]["Comment"];
}) => {
  return (
    <Paper key={comment.id} sx={{ p: 2, mb: 2, backgroundColor: "#e8e9eb" }}>
      <Typography variant="subtitle2" color="textSecondary">
        {comment.creator} - {new Date(comment.creation_time!).toLocaleString()}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          whiteSpace: "pre-wrap",
          fontFamily: "monospace",
          backgroundColor: "#333",
          color: "#eee",
          p: 1,
          mt: 1,
          borderRadius: 1,
        }}
      >
        {comment.text}
      </Typography>
    </Paper>
  );
};

export default CommentCard;
