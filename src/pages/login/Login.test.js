import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';


describe('Login page component test suit', () => {
  let wrapper;
  const signIn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Login signinUser={signIn} />);
  });

  it('Signin page rendered successfully', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('Clicking on signin button should call signin function passed in props from Login High Order function', () => {
    const spy = jest.spyOn(wrapper.instance(), 'signin').mockImplementation(jest.fn());
    wrapper.instance().forceUpdate();
    wrapper.find('[data-test="signin-form"]').simulate('submit');
    expect(spy).toHaveBeenCalled();
  });
});
