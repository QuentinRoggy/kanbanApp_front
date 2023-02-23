import { Chip, createTheme, ThemeProvider } from '@mui/material';
import PropTypes from 'prop-types';

import './style.scss';


function CardTag({label, color}) {

  const theme = createTheme({
    palette: {
      primary: {
        main: color,
      }
    }
  })

  const handleDelete = () => {
    console.info("Want to delete chip");
  }

  return (
    <ThemeProvider theme={theme}>
      <Chip label={label} onDelete={handleDelete} color='primary'/>

    </ThemeProvider>
  );
}

CardTag.propTypes = {
label: PropTypes.string.isRequired,
color: PropTypes.string.isRequired
};

export default CardTag;
