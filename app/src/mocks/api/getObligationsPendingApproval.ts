import { obligations } from 'mocks/json/obligationsPendingApproval.json'
import { Obligation } from 'common/types';


const getObligationsPendingApproval = (): Obligation[] => obligations;

export default getObligationsPendingApproval;