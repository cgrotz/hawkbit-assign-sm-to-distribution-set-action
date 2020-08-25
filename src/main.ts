import * as core from '@actions/core'
import {assignSoftwareModuleToDistributionSet} from './api'

async function run(): Promise<void> {
  try {
    const softwareModuleId: string = core.getInput('software-module-id')
    const distributionSetId: string = core.getInput('distribution-set-id')
    await assignSoftwareModuleToDistributionSet(
      parseInt(softwareModuleId),
      parseInt(distributionSetId)
    )
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
