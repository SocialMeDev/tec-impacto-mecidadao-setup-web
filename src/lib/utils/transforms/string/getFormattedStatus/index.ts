import publishStatusContext from './defaultContext'
import defaultStatusContext from './publichContext'

type Status = 'ACTIVE' | 'INACTIVE'

type PossibleStatus = {
  [key: string]: typeof publishStatusContext | typeof defaultStatusContext
}

export default function getFormattedStatus(status: Status, context = 'publish') {
  const possibleStatus: PossibleStatus = {
    status: publishStatusContext,
    publish: defaultStatusContext,
  }

  const statusContext = possibleStatus[context]

  return statusContext[status]
}
