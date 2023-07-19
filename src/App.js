import { useState, /*useEffect*/ } from 'react'
// 👉 STEP 2 - React Router imports (Routes, Route and Link)
import { Routes, Route, Link } from 'react-router-dom'
// Components used for the different routes
import Home from './Components/Home'
import Form from './Components/Form'
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

const initialOrder = [];
const initialDisabled = false;//true;

const App = () => {
  const [order, setOrder] = useState(initialOrder)          // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  // const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  const inputChange = (name, value) => {
    // validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
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
    // postNewFriend(newOrder)
    console.log(newOrder);
  }

  return (
    <div className='App'>
      <nav>
        <h1>Bloomtech Eats</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`items-list`) */}
          <Link to='/'>Home</Link>
          <Link to='pizza'>Order</Link>
        </div>
      </nav>

      {/* 👉 STEP 4 - Build Routes, and a Route for each of the components imported at the top */}
      {/* Note that the components will need some props in order to work */}
      {/* Note that the path that renders Item has a URL parameter */}
      {/* Note that the path that renders Item must support nested routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='pizza' element={<Form
                                        values={formValues}
                                        change={inputChange}
                                        disabled={disabled}
                                        submit={formSubmit}
                                      />} />
      </Routes>
    </div>
  );
};
export default App;
