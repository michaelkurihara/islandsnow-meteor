import React from 'react';

import { Dropdown, Grid, Menu } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    const mensOptions = [
      { key: 1, text: 'Tank Tops' },
      { key: 2, text: 'Shirts' },
      { key: 3, text: 'Hats' },
      { key: 4, text: 'Accessories' },
    ];

    const womensOptions = [
      { key: 1, text: 'Tank TOps' },
      { key: 2, text: 'Shirts' },
      { key: 3, text: 'Long Sleeve Shirts' },
      { key: 4, text: 'Sweatshirts' },
      { key: 5, text: 'Hats' },
      { key: 6, text: 'Accessories' },
      { key: 7, text: 'Stickers' },
    ];

    const kidsOptions = [
      { key: 1, text: 'Shirts' },
      { key: 2, text: 'Onesies' },
      { key: 3, text: 'Sweatshirts' },
      { key: 4, text: 'Accessories' },
    ];

    const brandOptions = [
      { key: 1, text: 'Aloha Surf Project' },
      { key: 2, text: 'Da Mokes' },
      { key: 3, text: 'Farmers Market Hawaii' },
      { key: 4, text: 'Hawaii Domestic Hawaii' },
      { key: 5, text: 'Herschel Supply Co' },
      { key: 6, text: 'Island Snow Hawaii' },
      { key: 7, text: 'Kailua Boys' },
    ];

    return (
        <Grid centered>
          <Grid.Row>
            <Menu borderless className="secondmenu">
              <Dropdown text="MEN" options={mensOptions} simple item />
              <Dropdown text="WOMEN" options={womensOptions} simple item />
              <Dropdown text="KIDS" options={kidsOptions} simple item />
              <Dropdown text="BRANDS" options={brandOptions} simple item />
              <Menu.Item>SEARCH</Menu.Item>
            </Menu>
          </Grid.Row>
        </Grid>
    );
  }
}
