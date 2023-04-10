/* eslint-disable import/no-extraneous-dependencies */
import { mount } from 'enzyme';
import React from 'react';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('footer', () => {
  const footer = mount(<Footer />);
  test('render del footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer snapshot', () => {
  test('combrobar la UI del componente footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
