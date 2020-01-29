import React from 'react';
import ObligationListItem from 'components/ObligationListItem';
import { Obligation } from 'common/types';

const renderObligationListItem = (props: Obligation, index: number) => (
  <ObligationListItem {...props} key={index} />
);

export default renderObligationListItem;
