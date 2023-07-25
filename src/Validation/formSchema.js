import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(2, 'name must be at least 2 characters'),
  size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'size is required'),
  sauce: yup
    .string()
    .oneOf(['original', 'ranch', 'bbq', 'alfredo'], 'Sauce is required'),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  olives: yup.boolean(),
  pineapple: yup.boolean(),
  special: yup
    .string(),
})

export default formSchema