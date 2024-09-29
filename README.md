# Conditionalize-component

a powerful react HOC (Higher Order Component) for rendering components conditionally quickly

# Installation:

```bash
$ npm i conditionalize-component
```

# Example:

You can use `conditionalize-component` with **any** react function component.

```tsx
import { Box } from 'MyBoxComponent'
import { withConditionals } from 'conditionalize-component'

const BoxC = withConditionals(Box) // now BoxC is wrapped with the conditional props such as renderIf

function UsersPage() {
  return (
    <div>
      <h1>Other stuff</h1>
      <BoxC renderIf={true}>You'll see me</BoxC>
      <BoxC renderIf={false}>You'll not see me</BoxC>
    </div>
  )
}
```

## Example usage on HTML elements:

For native html elements, or Class components, simply wrap them in a function and pass them the necessary props

```tsx
import { withConditionals } from 'conditionalize-component'

export const Button = withConditionals((props: React.HTMLAttributes<HTMLButtonElement>) => <button {...props} />) // now button is wrapped with the conditional props such as renderIf

function UsersPage() {
  return (
    <div>
      <h1>Other stuff</h1>
      <Button renderIf={true}>You'll see me</Button>
      <Button renderIf={false}>You'll not see me</Button>
    </div>
  )
}
```

# Using the built-in `DivIf` component

You can also use the premade `DivIf` component which is basically a div but has the conditional props such as `renderIf`:
```tsx
import { DivIf } from 'conditionalize-component'

function App(){
 return (
    <div>
      <DivIf renderIf={1 + 1 === 2}> You'll see me if 1 + 1 = 2 </DivIf>
      <div> You'll see me when 5 + 5 = 12 </div>
    </div>
  )
}
```

# Using the built-in `RenderIf` component

If you don't want to use `DivIf` component because it adds an HTML element to your DOM, you can use the `RenderIf` component which is basically a react fragment but has the conditional props such as `renderIf`:
```tsx
import { RenderIf } from 'conditionalize-component'

function App(){
 return (
    <div>
      <RenderIf renderIf={1 + 1 === 2}> You'll see me if 1 + 1 = 2 </RenderIf>
      <div> You'll see me when 5 + 5 = 12 </div>
    </div>
 )
}
```

# API

After applying the HOC on any of your components, you'll get the following props added to the interface of your component props:

```ts
renderIf?: boolean (default `true`)
override?: ReactNode
fallback?: ReactNode
execludeChildren?: boolean (default: `false`)
```

## Explaination:

- `renderIf`: The simplest one, only render the component if the value of this prop is `true`.
- `override`: In case `renderIf` was `false`, and case `execludeChildren` was also set to `false`, render the react node provided in this prop.
- `fallback`: In case `renderIf` was `false`, render the react node provided to this prop instead as a fallback.
- `execludeChildren`: In case `renderIf` was `false`, only the children of the component will be rendered, excluding their parent.

---

Created by Islam Yamor.
