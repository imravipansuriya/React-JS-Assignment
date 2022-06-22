import React, { useEffect, useState } from "react";

function ImageList() {
  const [images, setImages] = useState([])
  // const [imageModel, setImagesModel] = useState(false)
  const [Index, setIndex] = useState(0);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=13509518-a6c289caf564a521969cf6536`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
      })
      .catch((err) => console.log(err));
  }, []);




  return (
    <>
      {images.map((image, index) => {
        return <div className="col-lg-4 col-sm-6">
          <div className="card my-3 mx-3">
            <img className="card-img-top" data-toggle="modal" data-target="#exampleModal" src={image.webformatURL} alt="Gallary Image" onClick={() => { setIndex(index) }} />
            <div className="card-body">
              <p className="card-text">{image.tags}</p>
            </div>
          </div>
        </div>
      })}
   
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Image Modal
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {images.map((image, index) => {
              return Index === index ? (
                <div className="modal-body">
                  <div className="model-image">
                    <img className="card-img-top" data-toggle="modal" data-target="#exampleModal" src={image.webformatURL} alt="Gallary Image" />
                  </div>
                </div>
              ) : null
            })}


          </div>
        </div>
      </div>


    </>
  )
}

export default ImageList;

