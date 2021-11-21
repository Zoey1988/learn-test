import { mount } from '@vue/test-utils'
import ArticlesList from '@/components/ArticlesList.vue'

describe('ArticlesList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ArticlesList)
    expect(wrapper.vm).toBeTruthy()
  })
})
