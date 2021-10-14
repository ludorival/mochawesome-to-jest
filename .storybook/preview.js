import convertToJestReport from '../src/index'
import mochaTestResults from '../src/stories/reports/mochawesome.json'
import { withTests } from '@storybook/addon-jest'
// convert the mocha report to jest report
const results = convertToJestReport(mochaTestResults)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  //decorators: [withTests({ results })],
}

export const decorators = [
  withTests({
    results,
  }),
]
