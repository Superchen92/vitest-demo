import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import  Events from "../Events.vue";

test('test Events', () =>{
    const wrapper = mount(Events)

    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('increment')

    const incrementEvent = wrapper.emitted('increment')

    expect(incrementEvent).toHaveLength(3)
    expect(incrementEvent[0]).toEqual([{
        count: 1,
        isEven: false
    }])
    expect(incrementEvent[1]).toEqual([{
        count: 2,
        isEven: true
    }])
    expect(incrementEvent[2]).toEqual([{
        count: 3,
        isEven: false
    }])
})