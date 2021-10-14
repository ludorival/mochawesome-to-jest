import React from 'react'
import { mount } from '@cypress/react'
import { composeStories } from '@storybook/testing-react'
import * as rawStories from './Button.stories'
const { Primary, Secondary, Large } = composeStories(rawStories)

describe('Test Button stories', () => {
  it('should call the callback function when button is clicked', () => {
    const handleClick = cy.stub().as('onClick')
    mount(<Primary onClick={handleClick} />)
    cy.get('button').click()
    cy.get('@onClick').should('be.called')
  })
  describe('Primary style', () => {
    it('should have the primary class', () => {
      mount(<Large />)
      cy.get('button').should('have.class', 'storybook-button--large')
    })
    it('should have the large class', () => {
      mount(<Large />)
      cy.get('button').should('have.class', 'storybook-button--large')
    })
  })

  describe('Secondary style', () => {
    it('should have the secondary class', () => {
      mount(<Secondary />)
      cy.get('button').should('have.class', 'storybook-button--secondary')
    })

    it('should have the small class (failure)', () => {
      mount(<Secondary size="small" />)
      cy.get('button').should('have.class', 'storybook-button-small')
    })
  })
})
