import React from 'react';
import PageWrapper from '../components/layout/PageWrapper'
import Btn from '../components/Btn'
import { TweenMax, Elastic } from 'gsap'
import $ from 'jquery'

class PageListen extends React.Component{

  render() {
    return (
     <PageWrapper>
       <section className="section">
         <div className="py-3"></div>
         <div className="container containerListen">
           <div className="row">
             <div className="col text-center">
               <h2 className="pb-4">Listen to the Building One Another podcast on all your favorite platforms.</h2>
               <a href="http://google.com">
                 <Btn text="iTunes" />
               </a>
               <a href="http://google.com">
                 <Btn text="Stitcher" />
               </a>
               <a href="http://google.com">
                 <Btn text="SoundCloud" />
               </a>
               <a href="http://google.com">
                 <Btn text="Spotify" />
               </a>
             </div>
           </div>
         </div>
         <div className="py-3"></div>
       </section>
     </PageWrapper>
   )
  }
}


export default PageListen
