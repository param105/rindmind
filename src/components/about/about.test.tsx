import React, { Component } from 'react'
import {shallow} from 'enzyme';
import About from './js/About';




const setUp = (props={})=>{
    const aboutComponent = shallow(<About {...props} />);
    return aboutComponent;
}

describe('About component testing',()=>{
    let  aboutComponent;

    beforeEach(()=>{
        aboutComponent =setUp();
    })

    it('it should render linkedIn badge',()=>{
        const wrapper = aboutComponent.find('.LI-profile-badge');
        expect(wrapper.length).toBe(1)
    });

    it('it should render embedded google map ',()=>{
        const wrapper = aboutComponent.find('.map-container');
        expect(wrapper.length).toBe(1)
    });

    it('it should render constact us form',()=>{
        const wrapper = aboutComponent.find('.form')
        expect(wrapper.length).toBe(1)
    });

    it('should have 2 input box ',()=>{
        const wrapper = aboutComponent.find('.form');
      
    });
})