import { Card, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CardItem from './Card';
import './style.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { openAddModal,setAddType } from '../../../features/global/globalSlice';
import AddModal from '../../Common/AddModal';
import { useState } from 'react';
import { deleteList } from '../../../middlewares/listCard';


export default function ListCard({name, cards, listId}) {
  const dispatch = useDispatch();

  const addModalIsOpen = useSelector((state) => state.global.addModalOpen);

  const handleAddList = () => {
    dispatch(setAddType('carte'));
    dispatch(openAddModal(listId))
  }

  const handleDeleteList = () => {
    dispatch(deleteList(listId));
  }

  return (
    <>
      <Card className='cardList_container'>
      <div className='cardList_header'>
          <h2>{name}</h2>
          <div>
            <DeleteIcon className='icon' onClick={handleDeleteList} color='error'/>
            <AddIcon className='icon' onClick={handleAddList} color='primary'/>
          </div>
      </div>

      <CardContent className='cardList_content'>
      {
        cards.map((card) => (
          <CardItem key={card.id} label={card.content} tags={card.tags} cardId={card.id}/>
        ))
      }

      </CardContent>
      </Card>

      <AddModal open={addModalIsOpen} addType="carte"/>
    </>
  )
}


ListCard.propTypes = {
  name: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  listId: PropTypes.number.isRequired,
  };
