export interface JestReport {
  numFailedTestSuites: number
  numFailedTests: number
  numPassedTestSuites: number
  numPassedTests: number
  numPendingTestSuites: number
  numPendingTests: number
  numRuntimeErrorTestSuites: number
  numTotalTestSuites: number
  numTotalTests: number
  numTodoTests: number
  openHandles: unknown[]
  snapshot: Partial<{
    added: number
    failure: boolean
    filesAdded: number
    filesRemoved: number
    filesUnmatched: number
    filesUpdated: number
    matched: number
    total: number
    unchecked: number
    unmatched: number
    updated: number
  }>
  startTime: number
  success: boolean
  testResults: TestResult[]

  wasInterrupted: boolean
}
export type Status = 'passed' | 'failed' | 'pending'
export interface AssertionResult {
  ancestorTitles: string[]
  failureMessages: string[]
  fullName: string
  numPassingAsserts: number
  status: Status
  title: string
  location: string | null
}

export interface TestResult {
  assertionResults: AssertionResult[]
  endTime: number
  message: string
  name: string
  startTime: number
  status: Status
  summary: string
}
