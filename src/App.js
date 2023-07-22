import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
// Components used for the different routes
import Home from './Components/Home'
import Form from './Components/Form'
import axios from 'axios'
import schema from './Validation/formSchema'
import * as yup from 'yup'
import './App.css'

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  olives: false,
  pineapple: false,
  special: ""
};

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}

const initialOrder = [];
const initialDisabled = true;

const App = () => {
  const [order, setOrder] = useState(initialOrder) 
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      olives: formValues.olives,
      pineapple: formValues.pineapple,
      special: formValues.special.trim(),
    }
    // postNewOrder(newOrder)
    console.log(newOrder);
  } 

  useEffect(() => {
    // ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      <nav>
        <h1>Bloomtech Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='pizza'>Order</Link>
        </div>
      </nav>

      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='pizza' element={<Form
                                        values={formValues}
                                        change={inputChange}
                                        submit={formSubmit}
                                        disabled={disabled}
                                        errors={formErrors}
                                      />} />
      </Routes>
    </div>
  );
};
export default App;
