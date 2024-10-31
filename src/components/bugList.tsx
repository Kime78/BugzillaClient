import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { useParams } from "react-router-dom";
import { components } from "../generated/bugzilla";
import { CircularProgress } from "@mui/material";

export type Bug = components["schemas"]["Bug"];

const BugList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [bugList, setBugList] = useState<Bug[]>([]);
  const { product } = useParams();
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
        setLoading(false);
        setBugList(response.data?.bugs);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (bugList.length === 0) {
    return <h1>No bugs found! :D</h1>;
  }

  return (
    <div>
      {bugList.map((bug) => (
        <h2>{bug.summary}</h2>
      ))}
    </div>
  );
};

export default BugList;
