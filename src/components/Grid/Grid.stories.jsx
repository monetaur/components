import React from 'react';
import Grid from './Grid';
import Box from '../Box';

export default {
  title: 'Grid',
  component: Grid,
};

export const withDefaults = (args) => (
  <Grid {...args}>
    <Grid.Column><Box block>{args.content}</Box></Grid.Column>
    <Grid.Column><Box block>{args.content}</Box></Grid.Column>
    <Grid.Column><Box block>{args.content}</Box></Grid.Column>
  </Grid>
);

withDefaults.args = {
  content: 'Column',
  padded: false,
};

export const withResponsiveWidths = (args) => (
  <Grid {...args}>
    <Grid.Column sm={4} lg={3} xl={2}><Box block>xs=6, sm=4, lg=3, xl=2</Box></Grid.Column>
    <Grid.Column sm={4} lg={3} xl={2}><Box block>xs=6, sm=4, lg=3, xl=2</Box></Grid.Column>
    <Grid.Column sm={4} lg={3} xl={2}><Box block>xs=6, sm=4, lg=3, xl=2</Box></Grid.Column>
    <Grid.Column sm={4} lg={3} xl={2}><Box block>xs=6, sm=4, lg=3, xl=2</Box></Grid.Column>
    <Grid.Column sm={4} lg={3} xl={2}><Box block>xs=6, sm=4, lg=3, xl=2</Box></Grid.Column>
    <Grid.Column sm={4} lg={3} xl={2}><Box block>xs=6, sm=4, lg=3, xl=2</Box></Grid.Column>
  </Grid>
);

withResponsiveWidths.args = withDefaults.args;

export const withAutoWidths = (args) => (
  <Grid {...args}>
    <Grid.Column sm={4} lg={3} xl={2}><Box block>sm=4 lg=3 xl=2</Box></Grid.Column>
    <Grid.Column xs="auto"><Box block>xs=auto</Box></Grid.Column>
    <Grid.Column sm={4} lg={3} xl={2}><Box block>sm=4 lg=3 xl=2</Box></Grid.Column>
  </Grid>
);

withAutoWidths.args = withDefaults.args;
