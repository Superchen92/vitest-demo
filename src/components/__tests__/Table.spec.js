import {mount} from '@vue/test-utils'
import { expect, test } from 'vitest'
import Table from '../Table.vue'

test('test form',async () => {
    const wrapper = mount(Table)
    const input = wrapper.find('input')

    await input.setValue('my@email.com')
    expect(input.element.value).toBe('my@email.com')
})