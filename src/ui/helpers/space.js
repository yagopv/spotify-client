import { css } from 'styled-components/macro'
import { theme } from '../theme'

const spaceProps = props => ({
  padding: theme.spacing[props.p] || props.p,
  margin: theme.spacing[props.m] || props.m,
  paddingTop: theme.spacing[props.pt] || props.pt,
  paddingRight: theme.spacing[props.pr] || props.pr,
  paddingBottom: theme.spacing[props.pb] || props.pb,
  paddingLeft: theme.spacing[props.pl] || props.pl,
  marginTop: theme.spacing[props.mt] || props.mt,
  marginRight: theme.spacing[props.mr] || props.mr,
  marginBottom: theme.spacing[props.mb] || props.mb,
  marginLeft: theme.spacing[props.ml] || props.ml
})

export const space = css`
  ${spaceProps}
  ${({ px }) => px && `padding: 0 ${theme.spacing[px]};`}  
  ${({ py }) => py && `padding: ${theme.spacing[py]} 0;`}
  ${({ mx }) => mx && `margin: 0 ${theme.spacing[mx]};`}  
  ${({ my }) => my && `margin: ${theme.spacing[my]} 0;`}
`
