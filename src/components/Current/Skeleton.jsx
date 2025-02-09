import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    max={1200}
    height={650}
    viewBox="0 0 1200 650"
    backgroundColor="rgba(71, 147, 255, 0.2)"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="400" height="269" /> 
    <rect x="450" y="0" rx="20" ry="20" width="720" height="269" /> 
    <rect x="0" y="344" rx="10" ry="10" width="143" height="36" />
    <rect x="0" y="387" rx="20" ry="20" width="1170" height="235" />
  </ContentLoader>
)

export default Skeleton