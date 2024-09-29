import type { FC, PropsWithoutRef } from 'react';
import React from 'react';
import type { ConditionalProps } from './types';
declare function withConditionals<P>(OriginalComponent: FC<P>): React.ForwardRefExoticComponent<PropsWithoutRef<P & ConditionalProps> & React.RefAttributes<unknown>>;
export default withConditionals;
//# sourceMappingURL=withConditionals.d.ts.map