import React from 'react'
import ContentLoader from "react-content-loader"

const LoadingBlock = () => (
    <ContentLoader
    className='pizza-block'
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="128" r="120" />
      <rect x="0" y="270" rx="3" ry="3" width="280" height="26" />
      <rect x="0" y="310" rx="6" ry="6" width="280" height="80" />
      <rect x="8" y="1233" rx="3" ry="3" width="90" height="30" />
      <rect x="0" y="410" rx="3" ry="3" width="90" height="30" />
      <rect x="130" y="400" rx="25" ry="25" width="150" height="50" />
    </ContentLoader>
  )

  export default LoadingBlock
