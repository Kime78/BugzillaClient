import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { Bug } from "./bugList";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Fab,
  Typography,
} from "@mui/material";
import { components } from "../generated/bugzilla";
import CommentList from "./commentList";

type Comments = components["schemas"]["Comment"];

const BugView = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [bug, setBug] = useState<Bug>();
  const [comments, setComments] = useState<Comments[]>([]);
  const { bugId } = useParams();
  const navigate = useNavigate();

  if (!bugId) return;
  useEffect(() => {
    api
      .GET("/bug", {
        params: {
          query: {
            id: +bugId,
          },
        },
      })
      .then((response) => {
        if (!response.data?.bugs) return;

        setBug(response.data?.bugs[0]);
      });
    api
      .GET("/bug/{id}/comment", {
        params: {
          path: {
            id: +bugId,
          },
        },
      })
      .then((response) => {
        if (!response.data?.bugs) return;
        setLoading(false);
        setComments(response.data?.bugs[bugId].comments!);
      });
  }, []);
  if (loading) return <CircularProgress />;
  if (!bug) return <h1>Failed to load bug.</h1>;
  return (
    <div>
      <Fab
        color="primary"
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "20px", // Adjust the top position as needed
          left: "20px", // Adjust the left position as needed
        }}
      >
        <ArrowBackIcon />
      </Fab>
      <Container maxWidth="md">
        <Card
          variant="outlined"
          sx={{ mt: 4, boxShadow: 3, backgroundColor: "#e8e9eb" }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {bug.summary}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Bug ID: {bug.id}
            </Typography>
            <Box mt={2}>
              <Chip
                label={`Status: ${bug.status}`}
                color="primary"
                sx={{ mr: 1 }}
              />
              <Chip
                label={`Priority: ${bug.priority}`}
                color="secondary"
                sx={{ mr: 1 }}
              />
              <Chip label={`Severity: ${bug.severity}`} color="error" />
            </Box>
            <Box mt={2}>
              <Typography variant="body1">
                <strong>Assigned To:</strong> {bug.assigned_to}
              </Typography>
              <Typography variant="body1">
                <strong>Product:</strong> {bug.product}
              </Typography>
              <Typography variant="body1">
                <strong>Component:</strong> {bug.component}
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={1}>
                <strong>Reported on:</strong>{" "}
                {new Date(bug.last_change_time!).toLocaleDateString()}
              </Typography>
            </Box>
            {bug.cc?.length! > 0 && (
              <Box mt={2}>
                <Typography variant="h6">CC List:</Typography>
                {bug.cc!.map((email, index) => (
                  <Chip
                    key={index}
                    label={email}
                    variant="outlined"
                    sx={{ mr: 1, mt: 1 }}
                  />
                ))}
              </Box>
            )}
          </CardContent>
        </Card>

        <Typography
          variant="h5"
          sx={{ color: "black", marginTop: 4, marginBottom: 2 }}
        >
          Comments
        </Typography>

        {comments.length > 0 ? (
          <CommentList comments={comments} />
        ) : (
          <Typography variant="body1" color="textSecondary">
            No comments available for this bug.
          </Typography>
        )}
      </Container>
    </div>
  );
};

export default BugView;
