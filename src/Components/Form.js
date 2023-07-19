import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(values);
    submit()
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div>
      <div>
        <h1>Build Your Own Pizza</h1>
        <img src="./pizza-img.jpg" alt="pizza" />
      </div>

      <div>
        <h2>Build Your Own Pizza</h2>
        <form className="form container" onSubmit={onSubmit}>
          <div>
            <h2>Customer</h2>
            <p>Required</p>
            <label>Name
              <input type="text" name="name" value={values.name} onChange={onChange}/>
            </label>
          </div>

          <div className="form-section">
            <h2>Choice of Size</h2>
            <p>Required</p>
            <label>
              <select onChange={onChange} value={values.size} name='size'>
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
                <input
                  type="radio"
                  name="sauce"
                  value="original"
                  onChange={onChange}
                  checked={values.sauce === 'original'}
                />
                Original Red
              </label>
              <label>
                <input
                  type="radio"
                  name="sauce"
                  value="ranch"
                  onChange={onChange}
                  checked={values.sauce === 'ranch'}
                />
                Garlic Ranch
              </label>
              <label>
                <input
                  type="radio"
                  name="sauce"
                  value="bbq"
                  onChange={onChange}
                  checked={values.sauce === 'bbq'}
                />
                BBQ Sauce
              </label>
              <label>
                <input
                  type="radio"
                  name="sauce"
                  value="alfredo"
                  onChange={onChange}
                  checked={values.sauce === 'alfredo'}
                />
                Spinach Alfredo
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
                    checked={values.pepperoni}
                  onChange={onChange}
                />
                Pepperoni
              </label>
              <label>
                <input
                  type="checkbox"
                  name="sausage"
                    checked={values.sausage}
                  onChange={onChange}
                />
                Sausage
              </label>
              <label>
                <input
                  type="checkbox"
                  name="olives"
                    checked={values.olives}
                  onChange={onChange}
                />
                Black Olives
              </label>
              <label>
                <input
                  type="checkbox"
                  name="pineapple"
                    checked={values.pineapple}
                  onChange={onChange}
                />
                Pineapple
              </label>
            </div>
          </div>

          <div>
            <h2>Special Instructions</h2>
            <p>Anything else you'd like to add?</p>
            <div>
              <label>
                <input
                  value={values.special}
                  onChange={onChange}
                  name="special"
                  type="text"
                />
              </label>
            </div>
          </div>

          <button /*disabled={disabled}*/>Add to Order</button>
        </form>
      </div>
    </div>
  );
}
