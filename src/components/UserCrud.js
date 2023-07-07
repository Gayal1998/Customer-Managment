
import axios from "axios";
import { useEffect, useState } from "react";
import "./userCrud.css"


export default function UserCrud() {

    const [id ,setId] =useState('');
    const [firstName ,setFirstname] =useState('');
    const [lastName ,setLastname] =useState('');
    const [ DOB,setDOB] =useState('');
    const [ NIC,setNIC] =useState('');
    const [phone ,setPhone] =useState('');
    const [Fmembers ,setFmembers] =useState('');
    const [address ,setAddress] =useState('');
    const [city ,setCity] =useState('');
    const [country ,setCountry] =useState('');
    const [ customers,setUsers] =useState([]);

    useEffect(() => {
        (async () => await Load())();
      }, []);

      async function Load() {
    
        const result = await axios.get("http://localhost:8086/api/v1/customers");
        setUsers(result.data);
        console.log(result.data);
      }
      async function saveCustomer(event) {
   
        event.preventDefault();
        try {
          await axios.post("http://localhost:8086/api/v1/customers", {
            
          firstName: firstName,
                lastName: lastName,
                DOB: DOB,
                NIC: NIC,
                phone: phone,
                Fmembers: Fmembers,
                address: address,
                city: city,
                country: country,

           
          });
          alert("Student Registation Successfully");
          setFirstname("");
          setLastname("");
          setDOB("");
          setNIC("");
          setPhone("");
          setFmembers("");
          setAddress("");
          setCity("");
          setCountry("");
           
         
          Load();
        } catch (err) {
          alert(err);
        }
      }

      async function editCustomer(customers) {
        setFirstname(customers.firstName);
        setLastname(customers.lastName);
        setDOB(customers.DOB);
        setNIC(customers.NIC);
        setPhone(customers.phone);
        setFmembers(customers.Fmembers);
        setAddress(customers.address);
        setCity(customers.city)
        setCountry(customers.country)
     
        setId(customers.id);
      }
      async function updateCustomer(event) {
        event.preventDefault();
        try {
      await axios.put("http://localhost:8086/api/v1/customers/"+ customers.find((u) => u.id === id).id || id,
            {
                firstName: firstName,
                lastName: lastName,
                DOB: DOB,
                NIC: NIC,
                phone: phone,
                Fmembers: Fmembers,
                address: address,
                city: city,
                country: country,

            }
          );
          alert("Registation Updated");
          setId("");
          setFirstname("");
          setLastname("");
          setDOB("");
          setNIC("");
          setPhone("");
          setFmembers("");
          setAddress("");
          setCity("");
          setCountry("");
          Load();
        } catch (err) {
          alert(err);
        }
      }

      

      
    

      async function DeleteCustomer(id) {
        await axios.delete("http://localhost:8086/api/v1/customers/" + id);
         alert("User deleted Successfully");
         setId("");
          setFirstname("");
          setLastname("");
          setDOB("");
          setNIC("");
          setPhone("");
          setFmembers("");
          setAddress("");
          setCity("");
          setCountry("");
         Load();
        }
     
      return (
    <div className="container">
       <div className="container-left-pane"> 
        <div className="form">
        <form>
          <div class="form-group">
           
           
            <label className="front-label">Customer First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              value={firstName}
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label className="front-label">Customer Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              value={lastName}
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label className="front-label">DOB</label>
            <input
              type="text"
              class="form-control"
              id="DOB"
              value={DOB}
              onChange={(event) => {
                setDOB(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label className="front-label">NIC</label>
            <input
              type="text"
              class="form-control"
              id="NIC"
              value={NIC}
              onChange={(event) => {
                setNIC(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
           
           
            <label className="front-label">Phone</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </div>
          
          <div class="form-group">
            <label className="front-label">family members</label>
            <input
              type="text"
              class="form-control"
              id="Fmembers"
              value={Fmembers}
              onChange={(event) => {
                setFmembers(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label className="front-label">Address</label>
            <input
              type="text"
              class="form-control"
              id="address"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label className="front-label">Citry</label>
            <input
              type="text"
              class="form-control"
              id="city"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label className="front-label">country</label>
            <input
              type="text"
              class="form-control"
              id="country"
              value={country}
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            />
          </div>
          <div>
          
            <div> <button class="register-btn" onClick={saveCustomer}>
                    Register
                    </button>
            </div>
            
            <div><button class="update-btn"  onClick={updateCustomer} >
              Update
            </button></div>
            
          </div>
        </form>
        </div>
        </div>
       <div className="container-right-pane">
       <table class="table table-dark" align="center">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>NIC</th>
              <th>Phone</th>
              <th>Fmembers</th>
              <th>Address</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.DOB}</td>
                <td>{customer.NIC}</td>
                <td>{customer.phone}</td>
                <td>{customer.Fmembers}</td>
                <td>{customer.address}</td>
              
                <td>
                
                  <button
                    type="button"
                    class="btn-warning"
                    onClick={() => editCustomer(customer)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn-delete"
                    onClick={() => DeleteCustomer(customer.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
        
       
        <div>
     
        
        </div>
    </div>
      );
    }
    