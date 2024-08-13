import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add_visitor = () => {


  const [add, changeAdd] = useState(

    {
      "firstname": "",
      "lastname": "",
      "purpose": "",
      "whomToMeet": ""
    }

  )

  const addHandler = (event) => { //sets value to add variable

    changeAdd({ ...add, [event.target.name]: event.target.value })


  }

  const readValue = () => {

    console.log(add) //for printing
    axios.post("http://172.16.12.153:4000/addvisitor", add).then(

      (response)=>{
        console.log(response.data)
        alert("Added Successfully")
      }


    ).catch()

  }


  return (
    <div>
      <Navbar />
      <br />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">First Name</label>
                <input type="text" className="form-control" name='firstname' value={add.firstname} onChange={addHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Last Name</label>
                <input type="text" className="form-control" name='lastname' value={add.lastname} onChange={addHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Purpose</label>
                <input type="text" className="form-control" name='purpose' value={add.purpose} onChange={addHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Whom to meet </label>
                <input type="text" className="form-control" name='whomToMeet' value={add.whomToMeet} onChange={addHandler} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValue}>Submit</button>
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  )
}

export default Add_visitor