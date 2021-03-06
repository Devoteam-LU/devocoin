import { ReactNode } from 'react';

export enum UserGroup {
  Manager = 'MANAGER',
  Officer = 'OFFICER',
  Consultant = 'CONSULTANT',
}

export interface User {
  id: string;
  userGroup: UserGroup;
  firstName: string;
  lastName: string;
}

export interface Obligation {
  title: string;
  description: string;
  dueDate: number;
  value: number;
  avatar?: string;
}

export interface ObligationListItemOptions {
  startOption?: ReactNode;
  endOption?: ReactNode;
}

export interface DrizzleContractForm {
  handleSubmit: () => void;
}
