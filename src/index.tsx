import React, { useEffect } from 'react'
import styled from 'styled-components'
// @ts-ignore
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'
import './index.css'
// @ts-ignore
import arrowDown from './assets/Down-arrow.svg'
// @ts-ignore
import rightArrow from './assets/Right-arrow.svg'

export type Props = {
  url: string
}


const Content = styled.div`
  .swagger-ui div.is-open button.expand-operation:after {
    content: url('data:image/svg+xml; utf8, ${arrowDown}') !important;
  }

  .swagger-ui div button.expand-operation:after {
    content: url('data:image/svg+xml; utf8, ${rightArrow}') !important;
  }
  button.expand-operation:after {
    content: url('data:image/svg+xml; utf8, ${rightArrow}');
  }
`

const AsertoSwaggerUI: React.FC<Props> = ({url, ...props}) => {
  useEffect(() => {
    SwaggerUI({
      dom_id: '#aserto-swagger-ui',
      url,
      defaultModelsExpandDepth: -1,
      syntaxHighlight: {
        activate: true,
        theme: 'tomorrow-night'
      }
    });
  }, []);

  return (
    <>
      <Content id='aserto-swagger-ui' {...props} />
    </>
  )
}

export default AsertoSwaggerUI
