import React from 'react';
import { action } from '@storybook/addon-actions';
import Form from './Form';
import Label from '../Label';
import Button from '../Button';
import Input from '../Input';
import Dropdown from '../Dropdown';
import Select from '../Select';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import TextArea from '../TextArea';

export default {
  title: 'Form',
  component: Form,
};

export const withDefaults = (args) => (
  <Form {...args}>
    <Input placeholder="Text Field" />
    <Dropdown
      options={[
        { label: '10-19', value: 1 },
        { label: '20-29', value: 2 },
        { label: '30-39', value: 3 },
        { label: '40-49', value: 4 },
      ]}
      placeholder="Age"
    />
    <Select defaultValue="" required>
      <option disabled hidden value="">Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </Select>
    <Button primary type="submit">Submit</Button>
  </Form>
);

withDefaults.args = {
  onSubmit: (e) => {
    e.preventDefault();
    action('Form Submitted')(e);
  },
};

export const withFields = (args) => (
  <Form {...args}>
    <Form.Field block={args.fieldBlock}>
      <Input id="text" placeholder="Text Field" />
    </Form.Field>
    <Form.Field block={args.fieldBlock}>
      <Dropdown id="age" options={['10-19', '20-29', '30-39', '40-49']} placeholder="Age" />
    </Form.Field>
    <Form.Field block={args.fieldBlock}>
      <Select defaultValue="" id="gender" required>
        <option disabled hidden value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
    </Form.Field>
    <Button primary type="submit">Submit</Button>
  </Form>
);

withFields.args = {
  ...withDefaults.args,
  fieldBlock: true,
};

export const withFieldsAndLabels = (args) => (
  <Form {...args}>
    <Form.Field block={args.fieldBlock}>
      <Label htmlFor="text">Input Label</Label>
      <Input id="text" placeholder="Text Field" />
    </Form.Field>
    <Form.Field block={args.fieldBlock}>
      <Label htmlFor="textarea">TextArea Label</Label>
      <TextArea id="textarea" placeholder="TextArea" />
    </Form.Field>
    <Form.Field block={args.fieldBlock}>
      <Label htmlFor="age">Dropdown Label</Label>
      <Dropdown id="age" options={['10-19', '20-29', '30-39', '40-49']} placeholder="Age" />
    </Form.Field>
    <Form.Field block={args.fieldBlock}>
      <Label htmlFor="gender">Select Label</Label>
      <Select defaultValue="" id="gender" required>
        <option disabled hidden value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
    </Form.Field>
    <Form.Field block={args.fieldBlock}>
      <Label>Gender</Label>
      <Radio name="gender" value="male">Male</Radio>
      <Radio name="gender" value="female">Female</Radio>
    </Form.Field>
    <Form.Field block={args.fieldBlock}>
      <Checkbox>I agree to the Terms & Conditions</Checkbox>
    </Form.Field>
    <Button primary type="submit">Submit</Button>
  </Form>
);

withFieldsAndLabels.args = {
  ...withDefaults.args,
  fieldBlock: true,
};
