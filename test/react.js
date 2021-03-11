import React from 'react';
import Enzyme, { shallow, mount,render } from 'enzyme';
import { expect } from 'chai';
import Avatar from '../src/Avatar';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
let mock = new MockAdapter(axios);
Enzyme.configure({ adapter: new Adapter() });
mock.onGet('/users').reply(200, {
    user: { name: 'woder' }
})
console.log('mock request');
describe('test Avatar', function () {
    it('render', function (done) {
        axios.get("/users").then(resp => {
            const wrapper = render(<Avatar />);
            wrapper.update();
            expect(wrapper.contains(<div>Avatar</div>)).to.equal(true);
            done();
        });
        // const wrapper = shallow(<Avatar />);
        // expect(wrapper.contains(<div>Avatar</div>)).to.equal(true);
    })

});