import * as core from '@actions/core'
import Axios from 'axios'

function getBasicAuthHeader(): String {
  const tenant = core.getInput('hawkbit-tenant')
  const username = core.getInput('hawkbit-username')
  const password = core.getInput('hawkbit-password')
  const token = Buffer.from(`${tenant}\\${username}:${password}`).toString(
    'base64'
  )
  return `Basic ${token}`
}

export async function assignSoftwareModuleToDistributionSet(
  softwareModuleId: number,
  distributionSetId: number
): Promise<null> {
  const hawkbitHostUrl = core.getInput('hawkbit-host-url')

  const url = `https://${hawkbitHostUrl}/rest/v1/distributionsets/${distributionSetId}/assignedSM`

  core.info(
    `Assigning Software Module ${softwareModuleId} to Distribution Set ${distributionSetId}`
  )
  const response = await Axios.post(
    url,
    [
      {
        id: softwareModuleId
      }
    ],
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: getBasicAuthHeader()
      }
    }
  )
  return response.data
}
