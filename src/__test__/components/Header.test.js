import { mount, shallow } from 'enzyme';
import React from 'react';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';

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

describe('Header snapshot', () => {
  test('Comprobar el snapshot de header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
