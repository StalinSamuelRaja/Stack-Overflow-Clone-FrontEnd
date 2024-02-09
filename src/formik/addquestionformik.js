import * as yup from "yup";

export const questionschema = yup.object({
  title: yup.string().required("please enter Title  "),
  questionbody: yup.string().required("please enter question in detail "),
  tag: yup.string().required("please enter tags "),
});
