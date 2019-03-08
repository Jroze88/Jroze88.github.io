import React from 'react';
import ClickyGame from './clickygame';
import testimg from './10101f.jpg'
import $ from 'jquery'
import deckbbg from './deckbuilderbg.jpg'
// import { pushRotate as Menu } from 'react-burger-menu'


class DeckBuilder extends React.Component {

    showSettings (event) {
        event.preventDefault();
     
      }

    closeAllMenusOnEsc = (e) => {
        e = e || window.event;
       
        if (e.key === 'Escape' || e.keyCode === 27) {
          this.setState({areMenusOpen: false});
        }
      };


    componentWillMount = () => {
        $('nav.navbar').css('display', 'none')

   

        // filter: blur(8px);
        // -webkit-filter: blur(8px);
    }





    render() {

        const deckbuilderstyle = {
            width: '100vw',
            height: '100vh',
            filter: 'blur(5px)',
            backgroundImage: `url(${deckbbg})`,
            zIndex : '-5'
        }
    
        return(
            <div>
                <ul>
                    <li><button><img src='' /> </button></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            <span style={deckbuilderstyle}></span>


            </div>
        )
    }
}

export default DeckBuilder
