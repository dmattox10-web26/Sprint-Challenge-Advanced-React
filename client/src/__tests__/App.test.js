import React from "react";
import { shallow, mount } from "enzyme";
import App from '../App'

it("renders", () => {
    shallow(<App />);
  });

it("starts with no data", () => {
const wrapper = mount(<App />);
expect(wrapper.find(".feed")).toHaveLength(0);
});