import React, { useState } from "react";

const Form = ({setData,data}) => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  // console.log("outsite",data);
  const submitHandler = (e) =>{
e.preventDefault();
alert(title+""+description)
const obj =  { id:Math.random(), title,description}
setData([...data,obj]);
settitle("")
setdescription("")
  // console.log("insite",data);
}
  return (
    <>
      <div className="container my-5">
        <form onSubmit={submitHandler}>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-5">
              <input value={title} onChange={(e)=>settitle(e.target.value)} type="text" className="form-control" />
            </div>
            <div className="col-md-5">
              <input value={description} onChange={(e)=> setdescription(e.target.value)} type="text" className="form-control" />
            </div>

            <div className="col-md-2 ">
              <input type="submit" className="form-control btn btn-primary" value="Add" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
