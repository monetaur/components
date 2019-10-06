import React, { Fragment } from 'react';
import Radio from './Radio';

export default {
  title: 'Radio',
};

export const withDefaults = () => (
  <Fragment>
    <Radio block name="age" value="10-19">10-19</Radio>
    <Radio block name="age" value="20-29">20-29</Radio>
    <Radio block name="age" value="30-39">30-39</Radio>
  </Fragment>
);
