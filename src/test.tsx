import DivIf from './DivIf'
import { RenderIf } from './RenderIf'

const Test = () => {
  return (
    <DivIf>
      Hello!
      <RenderIf>asc</RenderIf>
    </DivIf>
  )
}
