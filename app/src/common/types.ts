import { ReactNode } from 'react';

export interface Obligation {
    title: string;
    description: string;
    dueDate: number;
    value: number;
}

export interface ObligationListItemOptions {
    startOption?: ReactNode;
    endOption?: ReactNode;
}