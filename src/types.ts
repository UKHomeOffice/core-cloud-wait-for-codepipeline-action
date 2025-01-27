type ActionInputKey =
  | 'commit_sha'
  | 'wait_for_status'
  | 'pipeline_name'

export type ActionInputParam = {
  name: ActionInputKey
  options: { required: boolean }
}

export type ActionInput = Record<ActionInputKey, string>