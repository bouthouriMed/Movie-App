import React from 'react';
import Modal from 'react-modal';

 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
Modal.setAppElement('#root')
 
function AddMovie({handleAdd}){

    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [imageSrc,setImageSrc] = React.useState('');
    const [title,setTitle] = React.useState('');
    const [description,setDesciprtion] = React.useState('');
    const [rating,setRating] = React.useState(0);
    
  
  
  function openModal(e) {
    setIsOpen(true);
    e.preventDefault()
    
  }
 

 
  function closeModal(){
    setIsOpen(false);
    
  }

  function handleSubmit(e){
      e.preventDefault()
     imageSrc && title && description && rating ? (handleAdd(imageSrc,title,description,rating)) : (alert("All fields are required, please try again"));
      closeModal()
  }


    return (
      <div style={{marginTop:'10px'}}>
        <button className="add-button"   onClick={openModal} >Add</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          
          <h5>All fields are required to add a movie : </h5>
          <form className="add-form">
            <input placeholder="Add movie name"  onChange={(e)=> setTitle(e.target.value)}/>
            <input placeholder="add movie image (ex: moviePic/spiderman.jpg)" onChange={(e)=> setImageSrc(e.target.value)}/>
            <input placeholder="Add movie description" onChange={(e)=> setDesciprtion(e.target.value)}/>
            <input placeholder="Add movie rating" onChange={(e)=> setRating(Number(e.target.value))}/>
            <div >
            <button className="add-submitt"  style={{backgroundColor:'rgb(97, 189, 94)'}} onClick={handleSubmit} >Add</button>
            <button className="close-button"  style={{backgroundColor:'orange'}} onClick={closeModal}>close</button>
            </div>
          </form>
        </Modal>
      </div>
    );
}

export default AddMovie
