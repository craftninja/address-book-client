import React from 'react';
import { FontIcon } from 'react-md';
import BusinessesPage from '../BusinessesPage';
import PeoplePage from '../PeoplePage';
import SearchPage from '../SearchPage';

export default [{
  content: <SearchPage/>,
  key: 'search',
  primaryText: 'Search',
  leftIcon: <FontIcon>search</FontIcon>,
  active: true,
},
{ key: 'divider', divider: true },
{
  content: <PeoplePage/>,
  key: 'people',
  primaryText: 'My Saved People',
  leftIcon: <FontIcon>people</FontIcon>,
}, {
  content: <BusinessesPage/>,
  key: 'business',
  primaryText: 'My Saved Businesses',
  leftIcon: <FontIcon>business</FontIcon>,
}];
