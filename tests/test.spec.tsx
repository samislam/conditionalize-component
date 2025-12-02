/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { ConditionalProps, DivIf, RenderIf, withConditionals } from '../src'

type SampleProps = {
  label: string
  dataId?: string
  children?: React.ReactNode
}

const SampleComponent = ({ label, dataId, children }: SampleProps) => (
  <section data-label={label} data-id={dataId}>
    {children}
  </section>
)

const ConditionalSample = withConditionals(SampleComponent)
type ConditionalSampleProps = Partial<SampleProps & ConditionalProps>
const renderConditional = (props: ConditionalSampleProps) =>
  (ConditionalSample as any).render(props, null) as React.ReactElement<any>

describe('withConditionals HOC', () => {
  it('renders the wrapped component when renderIf is true by default', () => {
    const child = <span>Visible</span>
    const element = renderConditional({ label: 'visible', dataId: 'demo', children: child })
    const renderedChild = element.props.children

    expect(renderedChild.type).toBe(SampleComponent)
    expect(renderedChild.props.label).toBe('visible')
    expect(renderedChild.props.dataId).toBe('demo')
    expect(renderedChild.props.children).toBe(child)
    expect('renderIf' in renderedChild.props).toBe(false)
  })

  it('renders the override when renderIf is false', () => {
    const override = <div>Override node</div>
    const element = renderConditional({ renderIf: false, override })

    expect(element.props.children).toBe(override)
  })

  it('falls back to the fallback node when renderIf is false and no override is provided', () => {
    const fallback = <p>Fallback node</p>
    const element = renderConditional({ renderIf: false, fallback })

    expect(element.props.children).toBe(fallback)
  })

  it('returns only children when excludeChildren is true', () => {
    const children = <em>Child only</em>
    const element = renderConditional({ renderIf: false, excludeChildren: true, children })

    expect(element.props.children).toBe(children)
  })

  it('prefers override over fallback when both are provided', () => {
    const override = <div>Preferred override</div>
    const fallback = <div>Should not render</div>
    const element = renderConditional({ renderIf: false, override, fallback })

    expect(element.props.children).toBe(override)
  })
})

describe('DivIf component', () => {
  it('forwards props to a div when renderIf is true', () => {
    const element = (DivIf as any).render(
      { renderIf: true, id: 'box', className: 'wrapper', children: 'content' },
      null
    ) as React.ReactElement<any>
    const renderedDiv = element.props.children

    expect(typeof renderedDiv.type).toBe('function')
    expect(renderedDiv.props.id).toBe('box')
    expect(renderedDiv.props.className).toBe('wrapper')
    expect(renderedDiv.props.children).toBe('content')
  })
})

describe('RenderIf component', () => {
  it('renders fallback content when renderIf is false', () => {
    const fallback = <span>Fragment fallback</span>
    const element = (RenderIf as any).render(
      { renderIf: false, fallback },
      null
    ) as React.ReactElement<any>

    expect(element.props.children).toBe(fallback)
  })
})
