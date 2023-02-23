import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { closeAddModal, updateInputAddModal } from '../../../features/global/globalSlice';
import { addCard } from '../../../middlewares/card';
import { addList } from '../../../middlewares/listCard';

import './style.scss';

function AddModal({ open }) {
  const dispatch = useDispatch();

  const inputField = useSelector((state) => state.global.inputAddModal);
  const addType = useSelector((state) => state.global.addType);

  const handleInputChange = (evt) => {
    dispatch(updateInputAddModal(evt.target.value));
  }

  const handleClose = () => {
    dispatch(closeAddModal());
  }

  const handleValidate = () => {
    if (addType === "carte") {
      dispatch(addCard())
    } else if (addType === 'liste') {
      dispatch(addList());
    }
    dispatch(closeAddModal());
  }

  return (
    <div>
      <Dialog 
        open={open} 
        onClose={handleClose} 
        fullWidth={true}
        maxWidth='sm'
      >
        <DialogTitle>Ajouter une {addType}</DialogTitle>
        <DialogContent>
          <TextField
            value={inputField}
            autoFocus
            id='name'
            label='Désignation'
            type='text'
            variant='standard'
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleValidate}>Valider</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AddModal.propTypes = {
open: PropTypes.bool.isRequired,
};

export default AddModal;
