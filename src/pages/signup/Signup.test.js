import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';


describe('Signup page component test suit', () => {
  let wrapper;
  const signUp = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Signup signupUser={signUp} />);
  });

  it('Signup page rendered successfully', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('Clicking on signin button should call signin function passed in props from Login High Order function', () => {
    const spy = jest.spyOn(wrapper.instance(), 'onSubmit').mockImplementation(jest.fn());
    wrapper.instance().forceUpdate();
    wrapper.find('[data-test="signup-form"]').simulate('submit');
    expect(spy).toHaveBeenCalled();
  });
});
