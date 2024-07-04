import { getActionInputs } from './helpers'
import { ActionInput } from './types'
import * as core from '@actions/core'
import * as exec from '@actions/exec'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const inputs: ActionInput = getActionInputs();

    console.log(`Got the following inputs`, JSON.stringify(inputs));

    const latestPipelineExecution = exec.getExecOutput("aws", ["codepipeline", `list-pipeline-executions`, `--pipeline-name` , `AWSAccelerator-Pipeline`])
    console.log(JSON.stringify(latestPipelineExecution));

    core.setOutput("execution_id", "execution-123");
    core.setOutput('status', "SUCCESS" );


  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}
