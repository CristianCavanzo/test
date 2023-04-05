import { mount } from 'enzyme';
import React from 'react';
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
