import React, { Component } from 'react'
import {shallow} from 'enzyme';
import About from './js/About';


const setUp = (props={})=>{
    const aboutComponent = shallow(<About {...props} />);
    return aboutComponent;
}

describe('About component testing',()=>{
    let  aboutComponent: { find: (arg0: string) => any; };

    beforeEach(()=>{
        aboutComponent =setUp();
    })

    it('It should render linkedIn badge',()=>{
        const wrapper = aboutComponent.find('.LI-profile-badge');
        expect(wrapper.length).toBe(1)
    });

    it('It should render embedded google map ',()=>{
        const wrapper = aboutComponent.find('.map-container');
        expect(wrapper.length).toBe(1)
    });

    it('It should render constact us form',()=>{
        const wrapper = aboutComponent.find('.form')
        expect(wrapper.length).toBe(1)
    });

    it('It should have 2 input box ',()=>{
        const wrapper = aboutComponent.find('.form');
        expect( (wrapper.find('input')).length).toBe(2)
    });

    it('it should have one text area',()=>{
        const wrapper = aboutComponent.find('.form');
        expect( (wrapper.find('textarea')).length).toBe(1)
    })

    it('it should have one button',()=>{
        const wrapper = aboutComponent.find('.form');
        expect( (wrapper.find('button')).length).toBe(1)
    })


})