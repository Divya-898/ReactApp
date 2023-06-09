import React from 'react';

import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

const Gallery = ({ albumId,
    albumWidth,
    albumHeight,
    items, scrollPosition }) => (
  <div>
   
        <img loading="lazy" 
            src={albumId.thumbnailUrl}
          alt=""
          width={albumWidth}
          height={albumHeight}
          style={{ borderRadius: "10px" }}
            />
            <img
  ref={(input) => {
    // onLoad replacement for SSR
    if (!input) { return; }
    const img = input;

    const updateFunc = () => {
      this.setState({ loaded: true });
    };
    img.onload = updateFunc;
    if (img.complete) {
      updateFunc();
    }
  }}
  src={albumId.thumbnailUrl}
   alt=""
/>

  </div>
);
 
export default trackWindowScroll(Gallery);