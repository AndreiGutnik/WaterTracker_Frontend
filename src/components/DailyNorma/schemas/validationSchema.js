import * as Yup from 'yup';

const validationSchema = Yup.object({
  gender: Yup.string().required('Gender is required'),
  weight: Yup.number()
    .required('Weight is required')
    .min(0, 'Weight must be a positive number'),
  activityTime: Yup.number()
    .required('Activity time is required')
    .min(0, 'Activity time must be a positive number'),
  drankWaterAmount: Yup.number()
    .required('Drank water amount is required')
    .min(0, 'Amount water must be a positive number')
    .max(15, 'The amount of water should be no more than 15 liters'),
});

export default validationSchema;
