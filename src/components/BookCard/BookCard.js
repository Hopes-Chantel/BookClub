import React, { useState} from 'react';
import {Card, CardImg, CardBody, Button, Modal, } from 'reactstrap';
import {Icon, Image} from "semantic-ui-react";
import LikeDislikes from "../LikeDislike/LikeDislike";
import {List} from 'antd';


const BookCard = (props) => {
  
  const { volumeInfo } = props.info;
  const bookRating = volumeInfo.averageRating
  const  bookId  = props.info.id;
  const {title, authors, description, pageCount, previewLink } = props.info.volumeInfo;
  const thumbNail = volumeInfo.hasOwnProperty('imageLinks') == false ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337" : volumeInfo.imageLinks.thumbnail;
  
  const [modal, setModal] = useState(false);
  
  const toggle = () => setModal(!modal);
console.log(bookId)
  return (
    <Card style={{ width: '233px' }} className='m-auto '>
      <CardImg
        top
        style={{ width: '100%', height: '233px' }}
        src={thumbNail}
        alt={title}
      />
      <CardBody>
        <h3>{title}</h3>
        <p>{authors}</p>
        {/* <Card.Content extra textAlign={"center"}>
                <Icon name={"heart"} size="large" color={liked} onClick={clickHandler} />
                Add To Favorites
            </Card.Content> */}
        <Button onClick={toggle}>Book Details</Button>
        <List.Item
        actions={[<LikeDislikes bookId={props.info.id} userId={localStorage.getItem('userId')} />]} />
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <div className='modal-header d-flex justify-content-center'>
          <h5 className='modal-title text-center' id='exampleModalLabel'>
            {title}
          </h5>
          <button
            aria-label='Close'
            className='close'
            type='button'
            onClick={toggle}
          >
            <span aria-hidden={true}>X</span>
          </button>
        </div>
        <div className='modal-body'>
          <div className='d-flex justify-content-between ml-3'>
            <img src={thumbNail} alt={title} style={{ height: '233px' }} />
            <div>
              <p>Pages: {pageCount}</p>
              <p>Author(s) : {authors}</p>
              <p> Rating: {bookRating}</p>
            </div>
          </div>
          <div className='mt-3'>{description}</div>
        </div>
        <div className='modal-footer'>
          <div className='left-silde'>
            <a
              href={previewLink}
              className='btn-link'
              color='default'
              type='button'
              target='_blank'
              rel='noopener noreferrer'
            >
              Preview Book
            </a>
          </div>
          
          </div>
    
      </Modal>
    </Card>
  );
};

export default BookCard;