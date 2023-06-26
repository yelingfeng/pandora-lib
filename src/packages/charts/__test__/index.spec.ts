import { mount } from '@vue/test-utils'
import Charts from '../index.vue'

describe('Charts.vue', () => {
  test('render', () => {
    const wrapper = mount(Charts, {
      props: {},
    })
    expect(wrapper.classes()).toContain('charts')
  })
})
