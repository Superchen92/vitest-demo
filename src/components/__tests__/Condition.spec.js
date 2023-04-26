import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Condition from '../Condition.vue'

test('i am admin',async () => {
    const wrapper = mount(Condition,{
        data(){
            return {
                admin: true,
                shouldShowDropdown: true
            }
        }
    })

    // expect(wrapper.find('#admin').exists()).toBe(false)
    // const profileLink = wrapper.get('#admin')
    // expect(profileLink.text()).toEqual('Admin')
    // expect(wrapper.get('#admin').text()).toEqual('Admin')
    expect(wrapper.find('#admin').exists()).toBe(true)
    expect(wrapper.get('#user-dropdown').isVisible()).toBe(true)
})