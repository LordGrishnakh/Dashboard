import React from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import SearchStyling from './Search.module.css';

import SearchField from '../../components/Search/SearchField';
import UserGrid from '../../components/Search/UserGrid';




export const SearchContainer = () => {


  return (
    <Card className={SearchStyling.Card}>
      <Card className={SearchStyling.SearchCard}>
        <SearchField />

      </Card>
      <Card className={SearchStyling.UserCards}>
        <Typography variant="h3" align="center" style={{borderBottom: '2px solid black'}}>
          User Cards
        </Typography>
        <UserGrid />
        {
          // users.map(user => <div>{user.data.fName}</div>)
        }
      </Card>
    </Card>
  );
}