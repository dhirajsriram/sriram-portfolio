import * as React from 'react';
import Masonry from 'react-masonry-component';
import "./endorsements.scss"
 
const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }
 
class Endorsements extends React.Component {
    render() {
        const childElements = this.props.elements.map(function(element){
           return (
                <li className="image-element-class">
                    <img src={element.src} alt="carousel-element"/>
                </li>
            );
        });
    
        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}
 
export default Endorsements;