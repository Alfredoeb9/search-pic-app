import React from 'react';
import '../app.css';

const ImageList = (props) => {
  const images = props.images.map(image => {
    return <img className={`img_contain`} key={image.id} src={image.urls.regular} alt={image.description} style={{width: '100%'}} />
  });

  return <div className="images_container">{images}</div>;
};

export default ImageList;