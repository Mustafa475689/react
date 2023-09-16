

 export function AddCard() {

const Title = document.getElementById('card-ctnr').value
let Submit  = document.getElementById('submit').value.addEventListener('click', () =>{
 console.log(Title)
})
  
    return (
      <>
      <div className="container" id="card-ctnr">
        
          <p className="para">Tilte</p>
        <input type="text" className="add-title" id="title"/>
        <br />

        <p className="para">Image</p>
        <input type="url" className="add-url" id="url"/>
        <br />
        
        <p className="para">Prize</p>
        <input type="number" className="add-prize" id="prize"/>
        <br />

        <p className="para">Category</p>
        <input type="text" className="add-catgry" id="category"/>
        <br />

        <p className="para">Description</p>
        <input type="text" className="add-descr" id="description"/>
        <br />

      <button className="submit-btn" id="submit">Add Service</button>

      </div>
      </>
    );
  }