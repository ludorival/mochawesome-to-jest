export interface MochaReport {
  stats: {
    suites: number
    tests: number
    passes: number
    pending: number
    failures: number
    start: string
    end: string
    duration: number
    testsRegistered: number
    passPercent: number
    pendingPercent: number
    other: number
    hasOther: boolean
    skipped: number
    hasSkipped: boolean
  }
  results: MochaSuite[]
  meta: {
    mocha: {
      version: string
    }
    mochawesome: {
      options: {
        quiet: boolean
        reportFilename: string
        saveHtml: boolean
        saveJson: boolean
        consoleReporter: string
        useInlineDiffs: boolean
        code: boolean
      }
      version: string
    }
    marge: {
      options: {
        reportDir: string
        saveJson: boolean
        charts: boolean
        overwrite: boolean
        html: boolean
        json: boolean
      }
      version: string
    }
  }
}

export type MochaSuite = {
  uuid: string
  title: string
  fullFile: string
  file: string
  beforeHooks: unknown[]
  afterHooks: unknown[]
  tests: MochaTest[]
  suites: MochaSuite[]
  passes: string[]
  failures: unknown[]
  pending: unknown[]
  skipped: unknown[]
  duration: number
  root: boolean
  rootEmpty: boolean
  _timeout: number
}
export type MochaTest = {
  title: string
  fullTitle: string
  timedOut: string | null
  duration: number
  state: string
  speed: string | null
  pass: boolean
  fail: boolean
  pending: boolean
  context: string | null
  code: string
  err: Partial<Error>
  uuid: string
  parentUUID: string
  isHook: boolean
  skipped: boolean
}
