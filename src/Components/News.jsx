import { React, useEffect, useState } from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import DefaultNewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { backend_url } from "../http";

export const AllNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Define the getNews function to fetch news data
  const getNews = async (pageNum) => {
    try {
      const response = await fetch(`${backend_url}/news?page=${pageNum}`);
      const responseData = await response.json();

      if (response.ok) {
        const data = responseData.results;

        if (data.length === 0) {
          setHasMore(false); // No more data to load
        } else {
          setNewsData((prevData) => [...prevData, ...data]);
          setPage(page + 1);
        }
      } else {
        console.error("API response:", responseData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getNews(currPage);
  }, [currPage]);

  const loadMoreNews = () => {
    setLoading(true);
    getNews(page + 1)
      .then((newNewsData) => {
        if (newNewsData.length === 0) {
          setHasMore(false); // No more data to load
        } else {
          setNewsData([...newsData, ...newNewsData]);
          setPage(page + 1);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading more news:", error);
        setLoading(false);
      });
  };

  return (
    <Stack
      direction="column"
      spacing={1}
      alignItems="center"
      sx={{
        pt: 1,
      }}
    >
      <InfiniteScroll
        dataLength={newsData.length}
        next={loadMoreNews}
        hasMore={hasMore}
        loader={
          <p>
            {" "}
            <CircularProgress sx={{ color: "#5D20D2" }} disableShrink />
          </p>
        }
      >
        <Typography
          sx={{ fontSize: 22, fontWeight: 600, marginBottom: 2, marginTop: 2 }}
        >
          Rajasthan News
        </Typography>

        {newsData.map((news, idx) => {
          console.log("News item:", news); // Add this line
          return (
            <Box key={idx}>
              <DefaultNewsCard news={news} />
            </Box>
          );
        })}
      </InfiniteScroll>
    </Stack>
  );
};

export default AllNews;
