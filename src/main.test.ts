import * as core from '@actions/core'
import { run } from './main'

jest.mock('@actions/core')

describe('main', () => {

  beforeEach(() =>
    jest.resetAllMocks()
  )

  it('should retrieve the commit sha', () => {
    run()
    expect(core.getInput).toHaveBeenCalledWith('commit_sha', { required: true })
  })

  it('should retrieve the wait_for_status', () => {
    run()
    expect(core.getInput).toHaveBeenCalledWith('wait_for_status', { required: false })
  })

  it('should retrieve the pipeline_name', () => {
    run()
    expect(core.getInput).toHaveBeenCalledWith('pipeline_name', { required: false })
  })


})