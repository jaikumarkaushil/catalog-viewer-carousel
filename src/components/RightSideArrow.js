import React from 'react';


const RightSideArrow = (props) => (
    <div className='nextArrow' onClick={props.goToNextSlide}>
        <i className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
    </div>
)

export default RightSideArrow;