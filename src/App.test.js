import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
// import Title from './components/Title'
import RecipesContainer from './recipes/RecipesContainer'

chai.use(chaiEnzyme())

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  // it('contains a Title', () => {
  //   expect(app).to.have.descendants(Title)
  // })
  //
  // it('sets the Title to "All Recipes"', () => {
  //   expect(app).to.contain(<Title content="All Recipes" />)
  // })

  it('contains the RecipesContainer', () => {
    expect(app).to.have.descendants(RecipesContainer)
  })
})
