import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { useNavigate, useParams } from "react-router-dom";
import { components } from "../generated/bugzilla";
import {
  CircularProgress,
  Fab,
  Pagination,
  Stack,
  TextField,
} from "@mui/material";
import BugSummary from "./bugSummary";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export type Bug = components["schemas"]["Bug"];

const BugList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [bugList, setBugList] = useState<Bug[]>([]);
  const { product } = useParams();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const itemsPerPage = 7;
  const pageCount = Math.ceil(bugList.length / itemsPerPage);
  const navigate = useNavigate();
  const [originalList, setOriginalList] = useState<Bug[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    const results = originalList.filter((bug) => {
      return (
        bug.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bug.status?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bug.severity?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bug.platform?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(bug.id).includes(searchTerm)
      );
    });

    setBugList(results);
  };
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  console.log(product);
  useEffect(() => {
    api
      .GET("/bug", {
        params: {
          query: {
            component: product,
          },
        },
      })
      .then((response) => {
        if (!response.data?.bugs) return;
        const results = response.data.bugs.filter((bug) => {
          return (
            bug.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            bug.status?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            bug.severity?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            bug.platform?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(bug.id).includes(searchTerm)
          );
        });
        setLoading(false);
        setOriginalList(response.data.bugs);
        setBugList(results);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (bugList.length === 0) {
    return (
      <div>
        {" "}
        <TextField
          variant="outlined"
          placeholder="Search bugs by summary status severity or platform..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginBottom: "20px", width: "100%" }} // Full width for the search bar
        />
        <h1>No bugs found! :D</h1>
      </div>
    );
  }

  const startIndex = (page - 1) * itemsPerPage;
  const currentBugs = bugList.slice(startIndex, startIndex + itemsPerPage);

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
      <TextField
        variant="outlined"
        placeholder="Search bugs by summary status severity or platform..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: "20px", width: "100%" }} // Full width for the search bar
      />
      <h1 style={{ color: "black" }}>{product} bugs</h1>
      <Stack spacing={2}>
        {currentBugs.map((bug, index) => (
          <BugSummary key={index} bug={bug} />
        ))}
      </Stack>
      <Stack alignItems="center" mt={3}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default BugList;
