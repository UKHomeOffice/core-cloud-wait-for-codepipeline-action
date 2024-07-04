import { ActionInput, ActionInputParam } from './types'
import * as core from '@actions/core'

export const getActionInputs = (): ActionInput => {
  const variables: ActionInputParam[] = [
    { name: 'commit_sha', options: { required: true } },
    { name: 'wait_for_status', options: { required: false } },
    { name: 'pipeline_name', options: {required: false }}
  ]

  return variables.reduce((obj, variable) => {
    const value: string | undefined = core.getInput(
      variable.name,
      variable.options
    )
    return Object.assign(obj, { [variable.name]: value })
  }, {}) as ActionInput
}