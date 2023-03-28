import type { FC } from 'react';
import { ReactNode } from 'react';
interface ConditionalProps {
    renderIf?: boolean;
    override?: ReactNode;
    children?: ReactNode;
    fallback?: ReactNode;
    execludeChildren?: boolean;
}
type FC2<P extends object> = (props: P) => ReactNode;
declare function withConditionals<PROPS extends object>(OriginalComponent: FC<PROPS>): FC2<PROPS & ConditionalProps>;
export default withConditionals;
//# sourceMappingURL=withConditionals.d.ts.map