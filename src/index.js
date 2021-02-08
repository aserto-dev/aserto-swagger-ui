import React, { useEffect } from 'react'
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'
import './index.css'

const AsertoSwaggerUI = ({url}) => {
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
      <div id='aserto-swagger-ui' />
    </>
  )
}

export default AsertoSwaggerUI
