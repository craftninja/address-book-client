import React from 'react';
import { FontIcon } from 'react-md';

export default [{
  key: 'search',
  primaryText: 'Search',
  leftIcon: <FontIcon>search</FontIcon>,
  active: true,
},
{ key: 'divider', divider: true },
{
  key: 'people',
  primaryText: 'My Saved People',
  leftIcon: <FontIcon>people</FontIcon>,
}, {
  key: 'business',
  primaryText: 'My Saved Businesses',
  leftIcon: <FontIcon>business</FontIcon>,
}];
