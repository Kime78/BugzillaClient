import { Pagination, Stack } from "@mui/material";
import { components } from "../generated/bugzilla";
import { useState } from "react";
import CommentCard from "./comment";

const CommentList = ({
  comments,
}: {
  comments: components["schemas"]["Comment"][];
}) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;
  const pageCount = Math.ceil(comments.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentComments = comments.slice(startIndex, startIndex + itemsPerPage);
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <Stack spacing={2}>
        {currentComments.map((comment, index) => (
          <CommentCard comment={comment} key={index} />
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

export default CommentList;
