import React from 'react'
import { mount } from '@cypress/react'
import { composeStories } from '@storybook/testing-react'
import * as rawStories from './Page.stories'
const { LoggedOut } = composeStories(rawStories)

it('should display the header', () => {
  mount(<LoggedOut />)
  cy.get('header').should('be.visible')
})
