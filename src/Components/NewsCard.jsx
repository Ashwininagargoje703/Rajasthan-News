import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { formatDate, isBiggerWord } from "../http";
import { SkeletonNewsCard } from "./Skeleton";

export const DefaultNewsCard = ({ news }) => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          border: "1px solid #e0e0e0",
          maxWidth: "800px",
          marginBottom: 2,
        }}
      >
        <Grid container spacing={0} columns={16}>
          <Grid item xs={16} md={8}>
            <Box p={1}>
              <Box sx={{ position: "relative", width: "100%" }}>
                <img className="news_img" src={news?.image} />
              </Box>

              <Stack
                direction="row"
                spacing={1}
                justifyContent="space-between"
                display={"flex"}
                mt={1}
                textAlign={"center"}
              >
                <Typography
                  letterSpacing={0.4}
                  sx={{
                    fontSize: 12,
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    pt: 0.6,
                  }}
                >
                  {formatDate(news?.time)}
                </Typography>

                <Typography
                  letterSpacing={0.4}
                  sx={{ fontSize: "12px", fontWeight: 600 }}
                >
                  Published by:{" "}
                  <a
                    style={{ textDecoration: "none", color: "#5d20d2" }}
                    href={news?.Link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    {news?.domain}
                  </a>
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={16} md={8}>
            <Box p={1} textAlign={"left"}>
              <Typography sx={{ fontWeight: 600 }}>{news?.headline}</Typography>
              {news?.article_summary ? (
                Array.isArray(news?.article_summary) ? (
                  <ul
                    style={{
                      fontSize: 16,
                      marginLeft: -18,
                    }}
                  >
                    {isBiggerWord(news?.article_summary)?.map((item, idx) => (
                      <li key={`summary-${idx}`}>
                        <Typography letterSpacing={0.4} sx={{ fontSize: 14 }}>
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Typography letterSpacing={0.4} sx={{ fontSize: 14 }}>
                    {news?.article}
                  </Typography>
                )
              ) : null}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
export default DefaultNewsCard;
