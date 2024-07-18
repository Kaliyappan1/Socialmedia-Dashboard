import { Avatar, Card, CardContent, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react'
import { lightGreen } from '@mui/material/colors';


function UserDetails() {
  return (
    <>
    <div className="userDetails">


    <Card sx={{m: 1, backgroundColor: "thistle"}}>
      <CardContent >
        <Grid container spacing={2} alignItems="center">
          <Grid sx={{ flexGrow: 1}}  position="static" item>
            <Avatar  sx={{width: 50, height: 50, bgcolor: lightGreen[600]}}>k</Avatar>
          </Grid>
         
          <Grid item>
            <IconButton>
              <MailOutlineIcon />
            </IconButton>
            <IconButton>
              <LanguageIcon />
            </IconButton>
          </Grid>
          
  
          <Grid container item>
            <Grid item xs={8}>

            <Typography sx={{ fontWeight: 700}} variant="h6">Kaliyappan</Typography>
            </Grid>
            <Grid item xs={8}>
            <Typography variant="subtitle1">Web Developer</Typography>
                
            </Grid>
            <Grid item xs={8}>
            <Typography  variant="body2" color="textSecondary">
              kaliyappan is a web developing influencer with a passion for sharing her unique style and inspiring others.
              She has built a strong following on various social media platforms, where she showcases her latest
              outfits, collaborates with brands, and engages with her community.
            </Typography>

            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2}}/>
        
        <Grid container  alignItems="center" justifyContent="space-evenly" style={{ marginTop: 16 }}>
          <Grid item>
            <Typography variant="h5" align="center">12.4K</Typography>
            <Typography variant="subtitle2" align="center">Followers</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" align="center">1.2K</Typography>
            <Typography variant="subtitle2" align="center">Following</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" align="center">456</Typography>
            <Typography variant="subtitle2" align="center">Posts</Typography>
          </Grid>
        </Grid>
        
      </CardContent>
    </Card>

    </div>
    </>
  )
}

export default UserDetails