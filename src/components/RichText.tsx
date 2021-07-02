import React from 'react'
import marked from 'marked'

interface Props {
  content: string
}

const RichText = ({ content }: Props) => {
  const html: string = marked(content)
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default RichText
