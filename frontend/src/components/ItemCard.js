import * as React from 'react';
import dummyImage from '../images/uploadImg.jpg'
import '../styles/ItemCard.css'
import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AddStockModalBox from './AddStockModalBox';
import UpdatePriceModalBox from './UpdatePriceModalBox';
import GetStatsModal from './GetStatsModal';
import { Button } from '@mui/material';


export default function ItemCard(props) {
    // console.log(props);

  // for updating item modalse
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // for updating stock modal
  const [openStock, setOpenStock] = React.useState(false);
  const handleOpenStock = () => setOpenStock(true);
  const handleCloseStock = () => setOpenStock(false);

  // for stats modal
  const [openStats, setOpenStats] = React.useState(false);
  const handleOpenStats = () => setOpenStats(true);
  const handleCloseStats = () => setOpenStats(false);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex', 
    flexDirection: 'column'
  };




  
  return (
    
    <div className="main-container">
         <div className="card-item">
            <img src={props.imageSrc} alt="" className='card-media'/>
            <div className="text">
                <p style={{'font-weight':'bold', 'fontSize':'20px', 'color':'#7E60BF'}}>{props.name}</p>
                <p>Item Code: <strong> {props.code} </strong></p>
                <p>Price: <strong> Rs. {props.unitPrice}</strong></p>
            </div>
            <div className="update-buttons">
              {/* <input type="number" className='qty' placeholder='quantity' /> */}
              <Button className='btn' onClick={handleOpenStock} > Add Stock </Button>
              <Button className='btn' onClick={handleOpen}> Update Price</Button>
            </div>
            <Button className='btn-stats' onClick={handleOpenStats}>Get Stats</Button>
            
        </div>

        {/* Modal for adding Updating items */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <UpdatePriceModalBox handleClose={handleClose} props= {props} />
      </Modal>


      {/* Modal for Update Stock */}
      <Modal
        open={openStock}
        onClose={handleCloseStock}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddStockModalBox props={props}/>
      </Modal>

      {/* Modal for stats */}
      <Modal
        open={openStats}
        onClose={handleCloseStats}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <GetStatsModal props={props}/>
      </Modal>

      

    </div>
   
  );
}