import React from 'react';

const Image = (props) => {
  const { tags, webformatURL, user } = props;

  
  return (
    <div className="row">
      <div className="col-md-12 card px-0">
        <div className="rounded-lg overflow-hidden">
          <img src={webformatURL} className="img-fluid " alt={tags}/>
          <span>Auther</span>
          <h1>{user}</h1>
        </div>
      </div>
    </div>
  );
};

export default Image;