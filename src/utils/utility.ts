import * as React from 'react';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

// see https://github.com/mobxjs/mobx-react/issues/256#issuecomment-335301953 for more explanation on what this does
export type TypedInject<Stores> = <StoreKeyToInject extends keyof Stores>(
  ...storeKeysToInject: StoreKeyToInject[]
) => <ExpectedProps extends Pick<Stores, StoreKeyToInject>>(
  component: React.ComponentType<ExpectedProps>
) => React.ComponentType<Omit<ExpectedProps, StoreKeyToInject>>;
