
import React from 'react';
import { useShowController, ShowContextProvider } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PageShow from '../resources/Organization/OrganizationShow2';

const mainStyle = makeStyles(theme => ({
  h3 :{
    textAlign : 'center'
  }
}));

const config = {
basePath: '/Organization',
id: process.env.REACT_APP_MIDDLEWARE_URL + 'organizations/test2',
resource: 'Organization'
};

const PlacePage = () => {

  const style = mainStyle();
  return(
    <Grid container spacing={0} classes={style}>
      <Grid item md={12} sm={12} xs={12} >
        <Paper>
          <ShowContextProvider value={useShowController(config)}>
            <PageShow {...config} />
          </ShowContextProvider>
        </Paper>    
      </Grid>
    </Grid>
  );
};

export default PlacePage;