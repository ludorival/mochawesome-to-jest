'use strict'

import {
  JestReport,
  TestResult,
  MochaReport,
  MochaSuite,
  MochaTest,
} from './types'

export default function convertToJestReport({
  results,
  stats,
}: MochaReport): JestReport {
  const startTime = new Date(stats?.start).getTime()
  let nextTime = startTime
  const testResults = results.map((suite) => {
    const testResult = createSuiteResult({ suite, startTime: nextTime })
    nextTime = testResult.endTime
    return testResult
  })
  return {
    numTotalTestSuites: stats?.suites,
    numFailedTests: stats?.failures,
    numPassedTests: stats?.passes,
    numPendingTests: stats?.pending,
    numTotalTests: stats?.tests,
    numTodoTests: 0,
    openHandles: [],
    numFailedTestSuites: testResults.filter((suite) =>
      suite.assertionResults.some((t) => t.status === 'failed')
    ).length,
    numPassedTestSuites: testResults.filter((suite) =>
      suite.assertionResults.every((t) => t.status === 'passed')
    ).length,
    numPendingTestSuites: testResults.filter((suite) =>
      suite.assertionResults.some((t) => t.status === 'pending')
    ).length,
    numRuntimeErrorTestSuites: 0,
    snapshot: {},
    startTime,
    success: stats?.passPercent === 100,
    testResults,
    wasInterrupted: false,
  }
}

function createSuiteResult({
  suite,
  jestSuite = {
    name: suite.fullFile,
    startTime: 0,
    endTime: 0,
    message: '',
    status: 'passed',
    summary: '',
    assertionResults: [],
  },
  startTime,
  ancestorTitles = [],
}: {
  suite: MochaSuite
  jestSuite?: TestResult
  startTime: number
  ancestorTitles?: string[]
}): TestResult {
  jestSuite.startTime = startTime
  const newAncestorTitles = suite.title
    ? ancestorTitles.concat(suite.title)
    : ancestorTitles
  suite.tests.forEach((test) =>
    appendTestResult({
      test,
      suite: jestSuite,
      ancestorTitles: newAncestorTitles,
      startTime,
    })
  )
  suite.suites.forEach((suite) =>
    createSuiteResult({
      suite,
      jestSuite,
      ancestorTitles: newAncestorTitles,
      startTime,
    })
  )
  return jestSuite
}

function appendTestResult({
  test,
  suite,
  ancestorTitles = [],
}: {
  test: MochaTest
  suite: TestResult
  startTime: number
  ancestorTitles?: string[]
}): void {
  suite.endTime = suite.startTime + test.duration
  suite.assertionResults.push({
    ancestorTitles,
    title: test.title,
    location: '',
    failureMessages: test.err?.message ? [test.err.message] : [],
    fullName: test.fullTitle,
    status: test.pass ? 'passed' : test.fail ? 'failed' : 'pending',
    numPassingAsserts: 0,
  })
}
