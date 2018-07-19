import React from 'react';
import { FontIcon } from 'react-md';
import Businesses from '../Businesses';
import People from '../People';
import Search from '../Search';

export default [{
  content: <Search/>,
  key: 'search',
  primaryText: 'Search',
  leftIcon: <FontIcon>search</FontIcon>,
  active: true,
},
{ key: 'divider', divider: true },
{
  content: <People/>,
  key: 'people',
  primaryText: 'My Saved People',
  leftIcon: <FontIcon>people</FontIcon>,
}, {
  content: <Businesses/>,
  key: 'business',
  primaryText: 'My Saved Businesses',
  leftIcon: <FontIcon>business</FontIcon>,
}];
