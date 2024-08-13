import React from 'react'
import Navbar from './Navbar'

const View_all = () => {
  return (
    <div>
        <Navbar/>

        <div className="container">

            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                <table class="table">
  <thead>

    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Purpose </th>
      <th scope="col">Whom To Meet</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Rahul</td>
      <td>R</td>
      <td>Official</td>
      <td>Principal</td>
      <td>15-05-2024</td>
      <td>9:45</td>
    </tr>
    
     
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>Personal</td>
        <td>Manager</td>
        <td>20-05-2024</td>
        <td>10:30</td>
    </tr>

    

  </tbody>
</table>
                </div>
            </div>



        </div>
    </div>
  )
}

export default View_all