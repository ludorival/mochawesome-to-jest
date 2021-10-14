import React from 'react'
import { mount } from '@cypress/react'
import { composeStories } from '@storybook/testing-react'
import * as rawStories from './Header.stories'
const { LoggedIn, LoggedOut } = composeStories(rawStories)

describe('Header stories', () => {
  it('should display the login button when logged out', () => {
    mount(<LoggedOut />)
    cy.get(`[data-testid="login-btn"]`).should('be.visible')
    cy.get(`[data-testid="create-account-btn"]`).should('be.visible')
    cy.get(`[data-testid="logout-btn"]`).should('not.exist')
  })

  it('should display the login button when logged out', () => {
    mount(<LoggedIn />)
    cy.get(`[data-testid="login-btn"]`).should('not.exist')
    cy.get(`[data-testid="create-account-btn"]`).should('not.exist')
    cy.get(`[data-testid="logout-btn"]`).should('be.visible')
  })
})
