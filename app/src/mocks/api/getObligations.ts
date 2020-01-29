import { obligations } from 'mocks/json/obligations.json'
import { Obligation } from 'common/types';


const getObligations = (): Obligation[] => obligations;

export default getObligations;