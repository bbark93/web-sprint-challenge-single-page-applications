import React from "react";
// We'll need a Link from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function Form(props) {
  return (
    <div>
      <div>
        <h1>Build Your Own Pizza</h1>
        <img src="./pizza-img.jpg" alt="pizza" />
      </div>

      <div>
        <h2>Build Your Own Pizza</h2>
        <form>
          <div className="form-section">
            <h2>Choice of Size</h2>
            <p>Required</p>
            <label>
              <select>
                <option value="">--Select a size--</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>
          </div>

          <div className="form-section">
            <h2>Choice of Sauce</h2>
            <p>Required</p>
            <div>
              <label>
                Original Red
                <input
                  type="radio"
                  name="sauce"
                  value="original"
                  // onChange={onChange}
                />
              </label>
              <label>
                Garlic Ranch
                <input
                  type="radio"
                  name="sauce"
                  value="ranch"
                  // onChange={onChange}
                />
              </label>
              <label>
                BBQ Sauce
                <input
                  type="radio"
                  name="sauce"
                  value="bbq"
                  // onChange={onChange}
                />
              </label>
              <label>
                Spinach Alfredo
                <input
                  type="radio"
                  name="sauce"
                  value="alfredo"
                  // onChange={onChange}
                />
              </label>
            </div>
          </div>

          <div className="form-section">
            <h2>Add Toppings</h2>
            <p>Choose up to 4</p>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="pepperoni"
                  //   checked={values.hiking}
                  //   onChange={onChange}
                />
                Pepperoni
              </label>
              <label>
                <input
                  type="checkbox"
                  name="sausage"
                  //   checked={values.hiking}
                  //   onChange={onChange}
                />
                Sausage
              </label>
              <label>
                <input
                  type="checkbox"
                  name="italian"
                  //   checked={values.hiking}
                  //   onChange={onChange}
                />
                Spicy Italian Sausage
              </label>
              <label>
                <input
                  type="checkbox"
                  name="chicken"
                  //   checked={values.hiking}
                  //   onChange={onChange}
                />
                Grilled Chicken
              </label>
              <label>
                <input
                  type="checkbox"
                  name="onions"
                  //   checked={values.hiking}
                  //   onChange={onChange}
                />
                Onions
              </label>
              <label>
                <input
                  type="checkbox"
                  name="pepper"
                  //   checked={values.hiking}
                  //   onChange={onChange}
                />
                Green Pepper
              </label>
              <label>
                <input
                  type="checkbox"
                  name="olives"
                  //   checked={values.hiking}
                  //   onChange={onChange}
                />
                Black Olives
              </label>
              <label>
                <input
                  type="checkbox"
                  name="pineapple"
                  //   checked={values.hiking}
                  //   onChange={onChange}
                />
                Pineapple
              </label>
            </div>
          </div>

          <div>
            <h2>Choice of Substitute</h2>
            <p>Choose one</p>
            <div>
              <label>
                <input type="checkbox" />
                Gluten Free Crust (+ $1.00)
              </label>
            </div>
          </div>

          <div>
            <h2>Special Instructions</h2>
            <p>Anything else you'd like to add?</p>
            <div>
              <label>
                <input
                  value=""
                //   onChange={onChange}
                  name="instructions"
                  type="text"
                />
              </label>
            </div>
          </div>

          <label>Add to order
            <input type='submit'/>
          </label>
        </form>
      </div>
    </div>
  );
}
