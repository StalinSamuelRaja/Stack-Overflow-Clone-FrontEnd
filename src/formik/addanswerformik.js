import * as yup from "yup";

export const answerschema = yup.object({
  
  answer: yup.string().required("please enter answer in detail "),
  
});


