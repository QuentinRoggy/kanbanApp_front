import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openAddModal, setAddType } from '../../features/global/globalSlice';
import { getAll } from '../../middlewares/listCard';
import AddModal from '../Common/AddModal';
import ListCard from '../ProjectDetailsPage/ListCard';

import './style.scss';

function HomePage() {
  const dispatch = useDispatch();

  const addModalIsOpen = useSelector((state) => state.global.addModalOpen);

  const listCard = useSelector((state) => state.listCards.list);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const handleAddList = () => {
    dispatch(setAddType('liste'));
    dispatch(openAddModal());
  }

  return (
    <div className='homePage_container'>
      <Button onClick={handleAddList}>Ajouter une liste</Button>
      <div className='list_container'>
        {
          listCard.map((list) => (
            <ListCard key={list.id} name={list.name} cards={list.cards} listId={list.id}/>
          ))
        }
      </div>
      <AddModal open={addModalIsOpen} addType="liste"/>
    </div>
  );
}

HomePage.propTypes = {

};

export default HomePage;
