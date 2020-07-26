import React from 'react';


const LeftSideArrow = (props) => (
    <div className='backArrow' onClick={props.goToPrevSlide}>
        <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
    </div>
)

export default LeftSideArrow;