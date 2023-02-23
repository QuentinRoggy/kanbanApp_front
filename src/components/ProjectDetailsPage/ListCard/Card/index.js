import { Card } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import PropTypes from 'prop-types';

import './style.scss';
import CardTag from './CardTag';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../../../middlewares/card';


function CardItem({label, tags, cardId}) {
  const dispatch = useDispatch();

  const handleDeleteCard = () => {
    dispatch(deleteCard(cardId));
  }
  return (

      <Card className='card_container'>
        <div className='card_header'>
          <h2>{label}</h2>
          <div>
          <EditIcon className='icon' color='success'/>
          <DeleteIcon className='icon' onClick={handleDeleteCard} color='error'/>
          </div>
        </div>

        <div className='cardTag_Container'>
        {
          tags.map((tag) => (
            <CardTag key={tag.id} label={tag.name} color={tag.color} />
          ))
        }
        </div>
      </Card>

  );
}

CardItem.propTypes = {
label: PropTypes.string.isRequired,
tags: PropTypes.array.isRequired,
cardId: PropTypes.number.isRequired,
};

export default CardItem;

