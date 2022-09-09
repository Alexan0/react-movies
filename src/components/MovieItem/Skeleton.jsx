import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
	className="item-movie__column"
    width={280}
    height={365}
    viewBox="0 0 280 355"
    backgroundColor="#fffafa"
    foregroundColor="#ecebeb"
    {...props}
  >
	<rect x="108" y="138" rx="0" ry="0" width="0" height="1" /> 
    <rect x="117" y="189" rx="0" ry="0" width="0" height="1" /> 
    <rect x="118" y="191" rx="0" ry="0" width="1" height="0" /> 
    <rect x="-3" y="310" rx="10" ry="10" width="280" height="55" /> 
    <rect x="-1" y="0" rx="10" ry="10" width="280" height="300" />
  </ContentLoader>
)

export default Skeleton;