import React from 'react';
import "./experience.css";
import {BsPatchCheckFill} from 'react-icons/bs';
const Experience = () => {
  return (
    <section id="experience">
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
               <h3>Frontend Development</h3>
                <div className="experience__content">
                  <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                    <div> 
                         <h4>HTML</h4>
                        <small className='text_color'>Experienced</small>
                  </div>
                  </article>
                  <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>HTML</h4>
                        <small className='text_color'>Experienced</small>
                        </div>
                  </article>
                  <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                       <div>
                       <h4>CSS</h4>
                       <small className='text_color'>Experienced</small>
                       </div>
                  </article>   <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                       <div>
                       <h4>JavaScipt</h4>
                       <small className='text_color'>Experienced</small>
                       </div>
                  </article>  
                   <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                      <div>
                      <h4>Bootstrap</h4>
                      <small className='text_color'>Experienced</small>
                      </div>
                  </article>
                  <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>ReactJS</h4>
                        <small className='text_color'>Experienced</small>
                        </div>
                  </article>
                  
                </div>
          </div>
          <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                          <div>
                          <h4>Node JS</h4>
                          <small className='text_color'>Experienced</small>
                          </div>
                  </article>
                  <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                          <div>
                          <h4>MongoDB</h4>
                          <small className='text_color'>Experienced</small>
                          </div>
                  </article>
                  <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                              <div>
                              <h4>SQL</h4>
                          <small className='text_color'>Experienced</small>
                              </div>
                  </article>   
                  <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>Java</h4>
                          <small className='text_color'>Experienced</small>
                            </div>
                  </article>  
                   <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                          <div>
                          <h4>Python</h4>
                          <small className='text_color'>Experienced</small>
                          </div>
             
                  </article>
                  <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>Express</h4>
                        <small className='text_color'>Experienced</small>
                        </div>
                  </article>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Experience
