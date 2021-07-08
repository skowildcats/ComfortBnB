import React from 'react';

class NavListener extends React.Component {

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

  render() {
    this.scrollFunc()
    return (
      <div>
      </div>
    )
  }
}

export default NavListener