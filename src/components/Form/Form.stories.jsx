import React from 'react';
import { decorate } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import Form from './Form';
import Label from '../Label';
import Button from '../Button';
import Input from '../Input';
import Dropdown from '../Dropdown';
import Select from '../Select';
import Checkbox from '../Checkbox';
import Radio from '../Radio';

const preventDefault = decorate([
  (args) => {
    args[0].preventDefault();
    return args;
  },
]);

export default {
  title: 'Form',
};

export const withDefaults = () => (
  <Form onSubmit={preventDefault.action('Form Submitted')}>
    <Input placeholder="Text Field" />
    <Dropdown options={['10-19', '20-29', '30-39', '40-49']} placeholder="Age" />
    <Select required>
      <option disabled hidden selected value="">Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </Select>
    <Button primary type="submit">Submit</Button>
  </Form>
);

export const withFields = () => (
  <Form onSubmit={preventDefault.action('Form Submitted')}>
    <Form.Field block={boolean('Field Block', true)}>
      <Input id="text" placeholder="Text Field" />
    </Form.Field>
    <Form.Field block={boolean('Field Block', true)}>
      <Dropdown id="age" options={['10-19', '20-29', '30-39', '40-49']} placeholder="Age" />
    </Form.Field>
    <Form.Field block={boolean('Field Block', true)}>
      <Select id="gender" required>
        <option disabled hidden selected value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
    </Form.Field>
    <Button primary type="submit">Submit</Button>
  </Form>
);

export const withFieldsAndLabels = () => (
  <Form onSubmit={preventDefault.action('Form Submitted')}>
    <Form.Field block={boolean('Field Block', true)}>
      <Label htmlFor="text">Text Field Label</Label>
      <Input id="text" placeholder="Text Field" />
    </Form.Field>
    <Form.Field block={boolean('Field Block', true)}>
      <Label htmlFor="age">Text Field Label</Label>
      <Dropdown id="age" options={['10-19', '20-29', '30-39', '40-49']} placeholder="Age" />
    </Form.Field>
    <Form.Field block={boolean('Field Block', true)}>
      <Label htmlFor="gender">Text Field Label</Label>
      <Select id="gender" required>
        <option disabled hidden selected value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
    </Form.Field>
    <Form.Field block={boolean('Field Block', true)}>
      <Label>Gender</Label>
      <Radio name="gender" value="male">Male</Radio>
      <Radio name="gender" value="female">Female</Radio>
    </Form.Field>
    <Form.Field block={boolean('Field Block', true)}>
      <Checkbox>I agree to the Terms & Conditions</Checkbox>
    </Form.Field>
    <Button primary type="submit">Submit</Button>
  </Form>
);
