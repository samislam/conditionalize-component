import type { FC, ReactElement } from 'react';
interface ConditionalProps {
    renderIf?: boolean;
    override?: ReactElement;
    children?: ReactElement;
    fallback?: ReactElement;
    execludeChildren?: boolean;
}
declare function withConditionals<PROPS extends object>(OriginalComponent: FC<PROPS>): FC<PROPS & ConditionalProps>;
export default withConditionals;
//# sourceMappingURL=withConditionals.d.ts.map