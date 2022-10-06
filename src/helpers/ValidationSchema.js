import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^[а-яА-ЯіІїЇєЄa-zA-Z0-9]/
    )
    .min(3, 'Мінімальна кількість символів 3')
    .max(50, 'Максимальна кількість 80 символів')
    .required('Ім’я обов’язкове'),
  email: yup
    .string()
    .min(8, 'Мінімальна кількість символів 8')
    .max(50, 'Максимальна кількість 50 символів')
    .required('Електрона адреса обов’язкова'),
  password: yup
    .string()
    .matches(/^[^.-]\S*$/, 'Неправильний пароль')
    .min(6, 'Мінімальна кількість символів 6')
    .max(30, 'Максимальна кількість 30 символів')
    .required('Пароль обов’язковий'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Підтвердження обов’язово')
    .required('Підтвердження обов’язово'),
});
export default validationSchema;