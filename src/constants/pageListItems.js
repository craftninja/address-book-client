import React from 'react';
import { FontIcon } from 'react-md';
import CompaniesPage from '../CompaniesPage';
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
    content: <CompaniesPage/>,
    key: 'companies',
    primaryText: 'My Saved Companies',
    leftIcon: <FontIcon>business</FontIcon>,
  },
  {
    content: <OfficersPage/>,
    key: 'officers',
    primaryText: 'My Saved Officers',
    leftIcon: <FontIcon>people</FontIcon>,
  },
];
