import React,{useState} from "react";
import "./Form.css";
import emailjs from 'emailjs-com'
import MuiAlert from '@material-ui/lab/Alert';
function Form() {

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const [open,setOpen] = useState(false);
  const [error,setError] = useState(false);
  const handleClose=(()=>{
    setOpen(false)
  })
  const handleCloseError=(()=>{
    setError(false)
  })
  const submitform=((e)=>{
    e.preventDefault();
    emailjs.sendForm('service_kfd4oro','template_upfv561',e.target,'user_T7QgwxpY1dK3Oh6H84o6D').then(res=>{     
      document.getElementById("contact-form").reset();
      setOpen(true)
    }).catch(err=>{
      console.log(err)
      document.getElementById("contact-form").reset();
      setError(true)
    })
       
  })


  return (
    <>
    {open ? <>
      <Alert onClose={handleClose} severity="success">Message Send Successfully Catch you Soon!</Alert>
    </>:
    null
    }
        {error ? <>
      <Alert onClose={handleCloseError} severity="error">Oop's Something Went Wrong!</Alert>
    </>:
    null
    }
    
      <div className='conatiner mt-5'>
        <h1 className='form-title text-center'>Get in touch !</h1>
      <form id="contact-form" onSubmit={submitform}>
        <label>Name</label>
        <input required="" class="input-field" type="text" name="name"></input>
        <label>Subject</label>
        <input
          required=""
          class="input-field"
          type="text"
          name="subject"
        ></input>

        <label>Email</label>
        <input required="" class="input-field" type="text" name="email"/>

        <label>Message</label>
        <textarea required="" class="input-field" name="message"></textarea>

        <input id="submit-btn" type="submit" value="Send"></input>
      </form>
      </div>
      </>
  );
}

export default Form;
