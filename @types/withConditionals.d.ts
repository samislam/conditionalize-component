import { PropsWithChildren } from 'react';
import type { FC } from 'react';
import type { ConditionalProps } from './global.model';
declare function withConditionals<PROPS extends PropsWithChildren>(OriginalComponent: FC<PROPS>): FC<PROPS & ConditionalProps>;
export default withConditionals;
//# sourceMappingURL=withConditionals.d.ts.map