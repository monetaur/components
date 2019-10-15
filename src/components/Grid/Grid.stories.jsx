import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Grid from './Grid';
import Box from '../Box';

export default {
  title: 'Grid',
};

export const withDefaults = () => (
  <Grid padded={boolean('Padded', false)}>
    <Grid.Column><Box block>{text('Content', 'Column')}</Box></Grid.Column>
    <Grid.Column><Box block>{text('Content', 'Column')}</Box></Grid.Column>
    <Grid.Column><Box block>{text('Content', 'Column')}</Box></Grid.Column>
  </Grid>
);

export const withResponsiveWidths = () => (
  <Grid columns={16} padded={boolean('Padded', false)}>
    <Grid.Column sm="4" lg="3" xl="2"><Box block>xs=6, sm=4, lg=3, xl=2</Box></Grid.Column>
    <Grid.Column sm="4" lg="3" xl="2"><Box block>xs=6, sm=4, lg=3, xl=2</Box></Grid.Column>
    <Grid.Column sm="4" lg="3" xl="2"><Box block>xs=6, sm=4, lg=3, xl=2</Box></Grid.Column>
    <Grid.Column sm="4" lg="3" xl="2"><Box block>xs=6, sm=4, lg=3, xl=2</Box></Grid.Column>
    <Grid.Column sm="4" lg="3" xl="2"><Box block>xs=6, sm=4, lg=3, xl=2</Box></Grid.Column>
    <Grid.Column sm="4" lg="3" xl="2"><Box block>xs=6, sm=4, lg=3, xl=2</Box></Grid.Column>
  </Grid>
);

export const withAutoWidths = () => (
  <Grid columns={16}>
    <Grid.Column sm="4" lg="3" xl="2"><Box block>sm=4 lg=3 xl=2</Box></Grid.Column>
    <Grid.Column xs="auto"><Box block>xs=auto</Box></Grid.Column>
    <Grid.Column sm="4" lg="3" xl="2"><Box block>sm=4 lg=3 xl=2</Box></Grid.Column>
  </Grid>
);
