import React from 'react';
import { FontIcon } from 'react-md';
import BusinessesPage from '../BusinessesPage';
import OfficersPage from '../OfficersPage';
import SearchPage from '../SearchPage';

export default [
  {
    content: <SearchPage/>,
    key: 'search',
    primaryText: 'Search',
    leftIcon: <FontIcon>search</FontIcon>,
    active: true,
  },
  { key: 'divider', divider: true },
  {
    content: <BusinessesPage/>,
    key: 'business',
    primaryText: 'My Saved Businesses',
    leftIcon: <FontIcon>business</FontIcon>,
  },
  {
    content: <OfficersPage/>,
    key: 'officers',
    primaryText: 'My Saved Officers',
    leftIcon: <FontIcon>people</FontIcon>,
  },
];
