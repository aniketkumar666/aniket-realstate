import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Testimonial</h6>
			          <h1 className="section-title">Clients Feedback</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
						your company's professionalism and expertise were evident.
						 You took the time to understand our preferences and needs,</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/1.jpg"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Jacob William</h5>
			                <label>Selling Agents</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
						Your in-depth knowledge of the local market and attention 
						to detail made us feel confident in our purchase.</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/2.jpg"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Kelian Anderson</h5>
			                <label>Selling Agents</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
						Any questions or concerns we had were promptly addressed,
						 and you kept us informed at every stage of the transaction.</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/3.jpg"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Adam Joseph</h5>
			                <label>Selling Agents</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
						We highly recommend your company to anyone
						 looking to buy or sell property.</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/4.jpg"} alt="#" />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>James Carter</h5>
			                <label>Selling Agents</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/*  */}
			    </div>
			  </div>
			</div>

        }
}

export default Testimonial