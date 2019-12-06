import React, {useState, useEffect}from 'react';

let FilmForm =()=>{

const [film,setFilm]= useState({title:'',poster:'',comment:''});


const handleChangeTitle=(e)=>{
setFilm({...film,title:e.target.value})
console.log(film)
}

const handleChangePoster=(e)=>{
setFilm({...film,poster:e.target.value})
console.log(film)
}

const handleChangeComment=(e)=>{
setFilm({...film,comment:e.target.value})
console.log(film)
}

const config = {  
  method: 'POST',
  headers: {
  "Content-Type": "application/json",
  },
  body: JSON.stringify(film),
 };

 const url ='https://post-a-form.herokuapp.com/api/movies/'

let sendForm =()=>{
  fetch(url,config)
  .then(res =>res.json())
  .then(res => {
    if (res.error) {
      alert(res.error);
    } else {
      console.log(res)
      alert(`Film ajouté avec l'ID ${res.id}!`);
    }
  }).catch(e => {
    console.error(e);
    alert(`Erreur lors de la tentative d'ajout`);
  });
}


return(
  <>
  <form>
    <fieldset>
      <label for='title'>
        <p>Nom du film :</p>
        <input type='text' name='title' id='title' value={(film.title)} onChange={handleChangeTitle}>
        </input>
      </label>
      <label for='poster'>
      <p>lien de l'affiche :</p>
        <input name='poster' id='poster' value={(film.poster)} onChange={handleChangePoster}>
        </input>
      </label>
      <label for='comment'>
      <p>avis sur le film :</p>
        <textarea name='comment' id='comment' rows='5' cols='30' value={(film.comment)} onChange={handleChangeComment}>
        </textarea>
      </label>
    </fieldset>
  </form>
  <button type='submit' onClick={sendForm}>Send</button>
  </>
)
}

export default FilmForm;

