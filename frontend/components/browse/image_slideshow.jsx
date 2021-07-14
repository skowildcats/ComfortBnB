import React from 'react'

class ImageSlideshow extends React.Component {
  constructor(props) {
    super(props)
  }

  changeSlide(direction) {
    let {idx} = this.props
    let dots = document.getElementsByClassName("dot")
    let active
    for (let i = idx * 5; i < (idx + 1) * 5; i++) {
      if (dots[i].classList.contains("active")) {
        active = i + 1
      }
    }
    if (direction === "prev") {
      if (active <= idx * 5 + 1) {
        this.currentSlide((idx + 1) * 5)
      } else {
        this.currentSlide(active - 1)
      }
    } else {  
      if (active >= (idx + 1) * 5) {
        this.currentSlide(idx * 5 + 1)
      } else {
        this.currentSlide(active + 1)
      }
      
    }
  }

  currentSlide(n) {
    let {idx} = this.props

    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (let i = idx * 5; i < (idx + 1) * 5; i++) {
      slides[i].style.display = "none"
    }

    for (let i = idx * 5; i < (idx + 1) * 5; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[n-1].style.display = "block"
    dots[n - 1].className += " active"
  }

  render() {
    let {idx, property} = this.props

    return (
      <div className="slideshow">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <img src={property.image_urls[0]} />
          </div>

          <div className="mySlides fade">
            <img src={property.image_urls[1]} />
          </div>

          <div className="mySlides fade">
            <img src={property.image_urls[2]} />
          </div>

          <div className="mySlides fade">
            <img src={property.image_urls[3]} />
          </div>

          <div className="mySlides fade">
            <img src={property.image_urls[4]} />
          </div>

          <a className="prev" onClick={this.changeSlide.bind(this, 'prev')}>
            <div>
              &#10094;
            </div>
          </a>
          <a className="next" onClick={this.changeSlide.bind(this, 'next')}>
            <div>
              &#10095;
            </div>
          </a>
        </div>

        <div className="dots">
          <span className="dot active" onClick={this.currentSlide.bind(this, idx * 5 + 1)} ></span>
          <span className="dot" onClick={this.currentSlide.bind(this, idx * 5 + 2)}></span>
          <span className="dot" onClick={this.currentSlide.bind(this, idx * 5 + 3)}></span>
          <span className="dot" onClick={this.currentSlide.bind(this, idx * 5 + 4)}></span>
          <span className="dot" onClick={this.currentSlide.bind(this, idx * 5 + 5)}></span>
        </div>
      </div>
    )
  }
}

export default ImageSlideshow