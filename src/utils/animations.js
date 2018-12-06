import { TweenMax, TimelineMax, Elastic, Power3 } from 'gsap'
// import { getTypeFromClassName } from './dom'
import $ from 'jquery'

// const ease = Elastic.easeOut.config(0.25, 1)
const ease = Power3.easeOut

export const introPageAnimation = (node) => {
  // const type = getTypeFromClassName(node.classList)


  // animate the page in
  if (node) {
    TweenMax.fromTo(
      node, .35,
      { opacity: 0, transform: 'translateY(20px)' },
      { opacity: 1, transform: 'translateY(0px)', ease, delay: .4 }
    )
  }

}

export const outroPageAnimation = (node) => {

  // find how much the page is scrolled from the top
  const doc = document.documentElement;
  const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

  // if the page is scrolled more than 100px, use jquery to scroll back to top
  if (top > 100) {
    $('html, body').animate({
      scrollTop: $("body").offset().top
    }, 350);
  }

  if (node) {
    TweenMax.fromTo(node, .35,
      { transform: 'translateY(0px)', opacity: 1 },
      { transform: 'translateY(20px)', opacity: 0, ease })

  }
}
