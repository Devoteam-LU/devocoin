import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Coins = ({ children }: Props) => {
  return <>{children}</>;
};

export default Coins;
