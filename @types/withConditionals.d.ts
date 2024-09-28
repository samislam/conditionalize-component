import type { FC } from 'react';
import React from 'react';
import type { ConditionalProps } from './types';
declare function withConditionals<PROPS>(OriginalComponent: FC<PROPS>): React.ForwardRefExoticComponent<React.PropsWithoutRef<PROPS & ConditionalProps> & React.RefAttributes<unknown>>;
export default withConditionals;
//# sourceMappingURL=withConditionals.d.ts.map