<img width="145" alt="Screen_Shot_2021-07-16_at_8 11 59_AM-removebg-preview" src="https://user-images.githubusercontent.com/82133872/125953582-4947e493-9460-40d6-87e9-3c9313beb767.png" >

# ComfortBnB

ComfortBnB is a full stack clone of AirBnB where users can browse for listings, view listings and create reservations. [Live Link](https://comfortbnb.herokuapp.com/?#/)

# Technologies

ComfortBnB is built using React as the frontend, HTML and CSS for styling. Ruby on rails combined with PostgreSQL establishes the backend for all data management needs. Additionally, google maps API was used to render maps and markers. Lastly, Javascript and Jqeury are used to incorporate elements of responsive web design and improving UI/UX.

# Select Features

## Browse Page Image Slideshow

<img src="https://media.giphy.com/media/7uT5TQXSPlJFmeyzZ9/giphy.gif" width="800" height="550" />

Each listing on the browse page has a image slideshow attached to it that allows the user to interact and scroll through listing images.  
This gives the user the ability to preview listing images without navigating to the detail page, saving time and improving funneling.

The images scroll and changes independently of each other with respect to their appropriate listings, this was accomplished through assigning indexes to images and toggling by identifying active image indexes and executing the appropriate event on the identified index.

#### Image arrow/dots toggling and updating active dots

```
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
```
#### Arrow/dots HTML
```
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

<div className="dots">
  <span className="dot active" onClick={this.currentSlide.bind(this, idx * 5 + 1)} ></span>
  <span className="dot" onClick={this.currentSlide.bind(this, idx * 5 + 2)}></span>
  <span className="dot" onClick={this.currentSlide.bind(this, idx * 5 + 3)}></span>
  <span className="dot" onClick={this.currentSlide.bind(this, idx * 5 + 4)}></span>
  <span className="dot" onClick={this.currentSlide.bind(this, idx * 5 + 5)}></span>
</div>
```

## Select Javascript/Jquery Features

These features are designed to enhance UI/UX

### Nav-Bar Render

<img src="https://media.giphy.com/media/bmRCZxQ6fC4yRN748v/giphy.gif" width="1000" height="625" />

This was done using scroll event listeners and conditionally rendering depending on scroll distance

```
scrollFunc() {
    window.onscroll = function () {
      if (window.location.href.split('/').slice(-1)[0] === "") {
        let base = 70
        if ($(".nav-full-search").css("display") !== "none") {
          let newBase = $(window).scrollTop()
          if (newBase > base) {
            $(".nav-full-search").css("display", "none")
          }
        }
        if ($(window).scrollTop() >= 70) {
          $(".nav-bar").css("background-color", "white")
          $(".home-link").css("color", "#fe385c")
          if ($(".nav-full-search").css("display") === "none") {
            $(".nav-search").css("display", "flex")
            $(".nav-search").css("color", "black")
            $(".nav-search-icon").css("display", "block")
          }
        } else {
          $(".nav-bar").css("background-color", "transparent")
          $(".home-link").css("color", "white")
          $(".nav-search").css("display", "none")
          $(".nav-search-icon").css("display", "none")
        }
      }
    }
  }
```


### Moving Component on Listing Detail Page

<img src="https://media.giphy.com/media/X7bOLJBFvHeJaOyiAG/giphy.gif" width="1000" height="550" />

This was done using scroll event listeners and change display and translate property

```
scrollFunc() {
    window.onscroll = function () {
      if ($(window).scrollTop() >= 480 && $(window).scrollTop() <= 895) {
        $(".moving-reservation").css("position", "fixed")
        $(".moving-reservation").css("transform", "translateY(-175%)")
      } else if ($(window).scrollTop() >= 895) {
        $(".moving-reservation").css("position", "absolute")
        $(".moving-reservation").css("transform", "translateY(150%)")
      } else {
        $(".moving-reservation").css("position", "absolute")
        $(".moving-reservation").css("transform", "translateY(0%)")
      }
    }
  }
```


