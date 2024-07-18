import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import React from "react";

function Cards() {
  return (
    <>
      <Grid
        sx={{ m: 2 }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Card sx={{ minHeight: 250, backgroundColor: "lightyellow" }}>
            <CardContent>
              <Typography >Account Reach</Typography>
              <Divider sx={{ mt: 2 }} />
              <Grid sx={{ m: 3 }} item>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700 }}
                  align="center"
                >
                  12.5M
                </Typography>
                <Typography
                  sx={{ fontSize: 12, color: "GrayText" }}
                  align="center"
                >
                  Total Account Reached
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card sx={{ minHeight: 250 }}>
            <CardContent>
              <Typography>Engagement</Typography>
              <Divider sx={{ mt: 2 }} />
              <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
                style={{ marginTop: 16 }}
              >
                <Grid item>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h5"
                    align="center"
                  >
                    12.4K
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "GrayText" }}
                    variant="subtitle2"
                    align="center"
                  >
                    Engaged Followers
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h5"
                    align="center"
                  >
                    1.2K
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "GrayText" }}
                    variant="subtitle2"
                    align="center"
                  >
                    Content Shares
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                justifyContent="space-evenly"
                style={{ marginTop: 16 }}
              >
                <Grid item>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h5"
                    align="center"
                  >
                    12.4K
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "GrayText" }}
                    variant="subtitle2"
                    align="center"
                  >
                    Comments
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h5"
                    align="center"
                  >
                    1.2K
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "GrayText" }}
                    variant="subtitle2"
                    align="center"
                  >
                    Saves
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card sx={{ minHeight: 250, backgroundColor: "lightcyan" }} >
            <CardContent>
              <Typography>Ads & Promotions</Typography>
              <Divider sx={{ mt: 2 }} />

              <Grid
                container
               
                alignItems="center"
                justifyContent="space-evenly"
                style={{ marginTop: 16 }}
              >
                <Grid item>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h5"
                    align="center"
                  >
                    12.4K
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "GrayText" }}
                    variant="subtitle2"
                    align="center"
                  >
                    Active Campaigns
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h5"
                    align="center"
                  >
                    1.2K
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "GrayText" }}
                    variant="subtitle2"
                    align="center"
                  >
                    Total Spend
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
               
                alignItems="center"
                justifyContent="space-evenly"
                style={{ marginTop: 16 }}
              >
                <Grid item>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h5"
                    align="center"
                  >
                    12.4K
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "GrayText" }}
                    variant="subtitle2"
                    align="center"
                  >
                    Reach
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h5"
                    align="center"
                  >
                    1.2K
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "GrayText" }}
                    variant="subtitle2"
                    align="center"
                  >
                    Conversion Rate
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
            
          <Card sx={{ minHeight: 250, backgroundColor: "honeydew" }}>
            <CardContent>
              <Typography>Content Analytics</Typography>
              <Divider sx={{ mt: 2 }} />

              <Grid
                container
               
                alignItems="center"
                justifyContent="space-evenly"
                style={{ marginTop: 16 }}
              >
                <Grid item>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h5"
                    align="center"
                  >
                    12.4K
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "GrayText" }}
                    variant="subtitle2"
                    align="center"
                  >
                    Total Posts
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h5"
                    align="center"
                  >
                    1.2K
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "GrayText" }}
                    variant="subtitle2"
                    align="center"
                  >
                    Total Stories
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                justifyContent="space-evenly"
               
              >
                <Grid item sx={1}  style={{ marginTop: 16 }}>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h5"
                    align="center"
                  >
                    12.4K
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "GrayText" }}
                    variant="subtitle2"
                    align="center"
        
                  >
                    Avg. Engagement Rate
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h5"
                    align="center"
                  >
                    1.2K
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "GrayText" }}
                    variant="subtitle2"
                    align="center"
                  >
                    Avg. Impressions
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>
    </>
  );
}

export default Cards;
