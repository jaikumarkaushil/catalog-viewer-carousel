import React from 'react';
import Images from '../shared/images';

function CatalogSlide(props) {
    const {highlightedIndex, length} = props;
    return (
        <div>
            {
                Images.map((index) => {
                    return(
                        <div key={index.id} className={index.id === highlightedIndex ? 'highlighted' : 'slide'} >
                            <img src={index.image} alt="img" />
                            <h4> {highlightedIndex + 1}/{length} </h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CatalogSlide;
