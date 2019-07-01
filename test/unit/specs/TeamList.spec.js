import Vue from 'vue'
import TeamList from '@/components/TeamList'
// import { shallowMount } from '@vue/test-utils'

// describe('TeamList.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(TeamList)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.querySelector('.search-wrapper').textContent)
//       .to.equal('Welcome to Your Vue.js App')
//   })
// })

describe('TeamList', () => {
  const Constructor = Vue.extend(TeamList)
  const vm = new Constructor().$mount()

  it('can accept child gallery item', async () => {
    expect(vm.$el.querySelector('input').placeholder).to.equal('Search')
  })
})
