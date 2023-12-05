import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText) ;
    if(text.length>0){
    props.showAlert('Text changed to uppercase', 'success');
    }
  }
  const handleLoCase = () =>{
    let loCase = text.toLowerCase();
    setText(loCase)
    if(text.length>0){
    props.showAlert('Text changed to Lowercase', 'success')
    }
  }

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  
  const wordCount= (text) =>{
    let count=0;
    text.split(' ').forEach(element => {
      if(element !== ''){
        count++
      }
    });
    return count 
    }
  const [text,setText] = useState('');
  return (
    <div className='container' style={{color : props.mode === 'light' ?'black':'white'}}>
      <h2 className='mt-3'>Enter Your Text to Change ...</h2>
      <div className="mb-3 mt-4" >
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10" style={{backgroundColor : props.mode === 'light' ?'white':'grey', color : props.mode === 'light' ?'black':'white', cursor:'cursor'}}></textarea>
      </div>
      {/* <button type="button" className="btn btn-primary me-3" onClick={handleOriginal}>Original Text</button> */}
      <button type="button" className="btn btn-primary me-3" onClick={handleUpCase}>UpperCase</button>
      <button type="button" className="btn btn-primary" onClick={handleLoCase}>LowerCase</button>
      <h3 className='mt-4'>Word and Character Count</h3>
      <p>{wordCount(text)} words and {text.length} character</p>

      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter something in the text box above to preview it.'}</p>
    </div>
  )
}
