import React from 'react';

import Card from '../components/Card';

//import  todpic from '../assets/images/todpic.jpg';
import capture from '../assets/images/capture.png';
import  petshop from '../assets/images/petshop.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        items: [
          //      {
            //        id: 0,
              //      title: 'R',
                //    subTitle: '',
                  //  imgSrc: ,
                    //link: '',
                    //selected: false
                //},
              {
                    id: 1,
                    title: 'Pet Shop',
                    subTitle: 'Pet Shop Project',
                    imgSrc: petshop,
                    link: 'https://github.com/crowntj07/The-Littlest-Pet-Shop',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Super Hero',
                    subTitle: 'Super Hero Project',
                    imgSrc: capture,
                    link: 'https://github.com/crowntj07/Super-Heroes',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;