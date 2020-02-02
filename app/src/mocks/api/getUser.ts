import consultantUser from 'mocks/json/consultantUser.json'
import { User } from 'common/types';

const getUser = (): User => consultantUser as User;

export default getUser;