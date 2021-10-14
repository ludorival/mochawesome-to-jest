import convertToJestReport from '../../src/index'
import testResults from '../../src/stories/reports/mochawesome.json'

const jestResport = convertToJestReport(testResults)
it('should convert the stats', () => {
  cy.wrap(jestResport).its('numFailedTestSuites').should('to.be.eq', 1)
  cy.wrap(jestResport).its('numTotalTests').should('to.be.eq', 8)
  cy.wrap(jestResport).its('numFailedTests').should('to.be.eq', 1)
  cy.wrap(jestResport).its('numPassedTests').should('to.be.eq', 7)
  cy.wrap(jestResport).its('numPendingTestSuites').should('to.be.eq', 0)
  cy.wrap(jestResport).its('numPassedTestSuites').should('to.be.eq', 2)
  cy.wrap(jestResport).its('numFailedTestSuites').should('to.be.eq', 1)
  cy.wrap(jestResport).its('numRuntimeErrorTestSuites').should('to.be.eq', 0)
  cy.wrap(jestResport).its('testResults').should('have.length', 3)
})

it('should convert the Headers suite', () => {
  const suite = jestResport.testResults[0]
  cy.wrap(suite).its('assertionResults').should('have.length', 2)
  cy.wrap(suite.assertionResults[0]).should(
    'have.a.property',
    'status',
    'passed'
  )
  cy.wrap(suite.assertionResults[0]).should(
    'have.a.property',
    'title',
    'should display the login button when logged out'
  )
  cy.wrap(suite.assertionResults[0])
    .its('ancestorTitles')
    .should('to.be.eql', ['Header stories'])
})

it('should convert the Page suite', () => {
  const suite = jestResport.testResults[1]
  cy.wrap(suite).its('assertionResults').should('have.length', 1)
  cy.wrap(suite.assertionResults[0]).should(
    'have.a.property',
    'status',
    'passed'
  )
  cy.wrap(suite.assertionResults[0]).should(
    'have.a.property',
    'title',
    'should display the header'
  )
  cy.wrap(suite.assertionResults[0])
    .its('ancestorTitles')
    .should('to.be.eql', [])
})

it('should convert the Button suite', () => {
  const suite = jestResport.testResults[2]
  cy.wrap(suite).its('assertionResults').should('have.length', 5)
  cy.wrap(suite.assertionResults[1]).should(
    'have.a.property',
    'title',
    'should have the primary class'
  )
  cy.wrap(suite.assertionResults[1])
    .its('ancestorTitles')
    .should('to.be.eql', ['Test Button stories', 'Primary style'])
  cy.wrap(suite.assertionResults[2]).should(
    'have.a.property',
    'title',
    'should have the large class'
  )
  cy.wrap(suite.assertionResults[2])
    .its('ancestorTitles')
    .should('to.be.eql', ['Test Button stories', 'Primary style'])

  cy.wrap(suite.assertionResults[4]).should(
    'have.a.property',
    'status',
    'failed'
  )
  cy.wrap(suite.assertionResults[4])
    .its('failureMessages')
    .should('have.length', 1)
})
