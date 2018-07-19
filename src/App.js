import React, { PureComponent } from 'react';
import { DialogContainer, FontIcon, NavigationDrawer } from 'react-md';

import pageListItems from './constants/pageListItems';

export default class Simple extends PureComponent {
  constructor() {
    super();

    // Update the items so they have an onClick handler to change the current page
    this.navItems = pageListItems.map((item) => {
      if (item.divider) {
        return item;
      }

      return {
        ...item,
        onClick: () => this.setPage(item.key, item.primaryText),
      };
    });

    this.state = {
      renderNode: null,
      key: pageListItems[0].key,
      page: pageListItems[0].primaryText,
    };
  }

  setPage = (key, page) => {
    this.navItems = this.navItems.map((item) => {
      if (item.divider) {
        return item;
      }

      return { ...item, active: item.key === key };
    });

    this.setState({ key, page });
  };

  handleShow = () => {
    this.setState({ renderNode: document.getElementById('navigation-drawer') });
  };

  render() {
    const { page } = this.state;
    return (
      <div>
        <DialogContainer
          id="navigation-drawer"
          aria-label="Navigation Drawer"
          visible={true}
          fullPage
          focusOnMount={false}
          onShow={this.handleShow}
          onHide={this.hide}
        >
          <NavigationDrawer
            navItems={this.navItems}
            mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
            tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            toolbarTitle="My Address Book"
            contentId="main-demo-content"
            temporaryIcon={<FontIcon>menu</FontIcon>}
            persistentIcon={<FontIcon>arrow_back</FontIcon>}
            contentClassName="md-grid"
          >
            <h2 className="md-cell md-cell--12">{page}</h2>
            <section className="md-text-container md-cell md-cell--12">

            </section>
          </NavigationDrawer>
        </DialogContainer>
      </div>
    );
  }
}
