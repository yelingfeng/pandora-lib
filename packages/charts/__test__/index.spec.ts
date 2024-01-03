import { mount } from '@vue/test-utils'
import Charts from '../src/index.vue'

describe('Charts.vue', () => {
  test('render', () => {
    const wrapper = mount(Charts, {
      props: {},
    })
    expect(wrapper.classes()).toContain('charts')
  })
})
