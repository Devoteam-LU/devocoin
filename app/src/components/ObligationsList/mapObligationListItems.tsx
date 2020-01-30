import React from 'react';
import ObligationListItem from 'components/ObligationListItem';
import { Obligation, ObligationListItemOptions } from 'common/types';

const renderObligationListItem = ({ ...obligationListItemOptions }: ObligationListItemOptions) => (
  obligation: Obligation,
  index: number,
) => <ObligationListItem key={index} {...obligationListItemOptions} {...obligation} />;

export default renderObligationListItem;
