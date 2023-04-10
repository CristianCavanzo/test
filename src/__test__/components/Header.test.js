import { mount, shallow } from 'enzyme';
import React from 'react';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  const component = (
    <ProviderMock>
      <Header />
    </ProviderMock>
  );
  test('Render del componente Header', () => {
    const header = shallow(component);
    expect(header.length).toEqual(1);
  });
  test('Renderl del titulo', () => {
    const header = mount(component);
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});
