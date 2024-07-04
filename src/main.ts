import { getActionInputs } from './helpers'
import { ActionInput } from './types'
import * as core from '@actions/core'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const inputs: ActionInput = getActionInputs();

    console.log(`Got the following inputs`, JSON.stringify(inputs));
    console.log(`Got the following environment variables`, JSON.stringify(process.env));

    core.setOutput("execution_id", "execution-123");
    core.setOutput('status', "SUCCESS" );


  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}
