/* eslint-disable import/first */
import React, { Component, Suspense } from 'react'
import  Images  from '../shared/images';
const CatalogSlide = React.lazy(() => import('./CatalogSlide'));
import LeftSideArrow from './LeftSideArrow';
import RightSideArrow from './RightSideArrow';  

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);

        this.state = {
            highlightedIndex: 0,
            length: Images.length,
            startCarousel: false,
        }
    }
    carouselInterval = 0;

    startCarousel() {

        if(!this.state.startCarousel) {
            this.carouselInterval = setInterval(this.goToNextSlide, 3000);
        }
        else {
            clearInterval(this.carouselInterval);
        }
        
        this.setState({
            startCarousel: !this.state.startCarousel
        })
    }
    
    goToPrevSlide() {
        let index = this.state.highlightedIndex;
        let length = this.state.length;
        
        if(index < 1) {
            index = length - 1;
        }
        else {
            index--;
        }
        this.setState({
            highlightedIndex: index
        });
    }
    goToNextSlide() {
        let index = this.state.highlightedIndex;
        let length = this.state.length;
    
        if(index === length - 1) {
            index = 0
        }
        else {
            index++;
        }
        this.setState({
            highlightedIndex: index
        });
    }

    render() {
        return (
            <div className="carousel-wrapper">
                <div className="carousel">
                    <LeftSideArrow
                        goToPrevSlide={this.goToPrevSlide}
                    />
                    <Suspense fallback={<div>Loading...</div>}>
                    <CatalogSlide 
                        highlightedIndex = {this.state.highlightedIndex} length = {this.state.length} 
                    />
                    </Suspense>
                    <RightSideArrow
                        goToNextSlide={this.goToNextSlide}
                    />
                </div>
                <div className="autoplay-checkbox">
                    <label htmlFor="slide">Slide</label>
                    <input type="checkbox" name="slide" checked={this.state.startCarousel} onChange={() => this.startCarousel()} />
                </div>
            </div>
        )
    }
}
