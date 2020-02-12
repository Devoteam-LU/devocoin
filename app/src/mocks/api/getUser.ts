import officerUser from 'mocks/json/officerUser.json';
import { User } from 'common/types';

const getUser = (): User => officerUser as User;

export default getUser;
