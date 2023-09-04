import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";

export const SkeletonNewsCard = () => {
  return (
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
              <Skeleton height={200} width={300} />
            </Box>

            <Stack
              direction="row"
              spacing={1}
              justifyContent="space-between"
              display={"flex"}
              mt={1}
              textAlign={"center"}
            >
              <Typography letterSpacing={0.4} sx={{ fontSize: 12 }}>
                <Skeleton width={80} />
              </Typography>

              <Typography
                letterSpacing={0.4}
                sx={{ fontSize: "12px", fontWeight: 600 }}
              >
                <Skeleton width={120} />
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={16} md={8}>
          <Box p={1} textAlign={"left"}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <Skeleton width={200} />
            </Typography>
            <ul style={{ fontSize: 16, marginLeft: -18 }}>
              <li>
                <Typography letterSpacing={0.4} sx={{ fontSize: 14 }}>
                  <Skeleton count={3} />
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
