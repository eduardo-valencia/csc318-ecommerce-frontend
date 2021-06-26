interface ChildImageSharp {
  gatsbyImageData: any
}

interface LocalFile {
  childImageSharp: ChildImageSharp
}

interface Thumbnail {
  alternativeText: string
  localFile: LocalFile
}

export default Thumbnail
