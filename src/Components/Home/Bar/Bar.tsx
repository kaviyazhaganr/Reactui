
import './Bar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Bar = () => {
    return (
        <>
            <div className="container">

                <div className='bar'>
                    <h3 className='bar-h3'>Featured Plans</h3>
                    <h5 className='bar-h5'>Explore All</h5>
                </div>

                <div className='bar-flex'>
                    <div className='bar-div'>
                        <div className='bar-1'>
                            <p>STRATEGY</p>
                            <h6>Money Momentum</h6>
                            <p>Tract Premium helps you start saver investments insight covering.</p>
                            <hr />
                            <h6> 3 yrs CAGR</h6>
                            <div className='bar-flex'>
                                <p className='bar-p'>7.20%</p>

                                <button className='bar-btn'><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>

                        </div>


                    </div>

                    <div className='bar-div-1'>
                        <div className='bar-1'>
                            <p>PLANS</p>
                            <h6>Long-Term</h6>
                            <p>Create a vision. To get started, imagine your dream life.</p>
                            <hr />
                            <h6> 25 yrs CAGR</h6>
                            <div className='bar-flex'>
                                <p className='bar-p-1'>14.20%</p>

                                <button className='bar-btn-1'><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>

                        </div>


                    </div>

                    <div className='bar-div-2'>
                        <div className='bar-1'>
                            <p>STRATEGY</p>
                            <h6>Focussed</h6>
                            <p>Be focused Life Plainning, however, can serve a roadmap or guide.</p>
                            <hr />
                            <h6> 1 yrs CAGR</h6>
                            <div className='bar-flex'>
                                <p className='bar-p-2'>11.20%</p>

                                <button className='bar-btn-2'><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>

                        </div>


                    </div>

                    <div className='bar-div-3'>
                        <div className='bar-1'>
                            <p>PLANS</p>
                            <h6>Fixed Income</h6>
                            <p>Get multiple benefits. and lumpsum option & Guaranteed Returns.</p>
                            <hr />
                            <h6> 5 yrs CAGR</h6>
                            <div className='bar-flex'>
                                <p className='bar-p-3'>8.20%</p>

                                <button className='bar-btn-3'><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>

                        </div>


                    </div>

                </div>

                <hr />

                <div>
                    <div className='footer'>
                        <h5 className='footer-h5'>Terms Policy</h5>
                        <h5 className='footer-h5'>.</h5>
                        <h5 className='footer-h5'>Customer Story</h5>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Bar