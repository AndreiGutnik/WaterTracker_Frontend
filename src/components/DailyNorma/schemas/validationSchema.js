import * as Yup from 'yup';

const validationSchema = Yup.object({
  gender: Yup.string().required('Required'),
  weight: Yup.number()
    .required('Required')
    .min(0, 'Weight must be a positive number'),
  activityTime: Yup.number()
    .required('Required')
    .min(0, 'Activity time must be a positive number'),
  drankWaterAmount: Yup.number()
    .required('Required')
    .min(0, 'Amount water must be a positive number'),
});

export default validationSchema;
