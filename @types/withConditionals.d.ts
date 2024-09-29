import React from 'react';
import type { ConditionalProps } from './types';
import type { FC } from 'react';
declare function withConditionals<P>(OriginalComponent: FC<P>): React.ForwardRefExoticComponent<React.PropsWithoutRef<P & ConditionalProps> & React.RefAttributes<unknown>>;
export default withConditionals;
//# sourceMappingURL=withConditionals.d.ts.map