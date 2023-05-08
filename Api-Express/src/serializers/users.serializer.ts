import * as yup from "yup";

const createUserSerializer = yup.object().shape({
  username: yup.string().required("Empty field!"),
  email: yup.string().email("Invalid email").required("Empty field!"),
  password: yup.string().required("Empty field"),
  first_name: yup.string().required("Empty field"),
  last_name: yup.string().required("Empty field"),
  is_superuser: yup.string(),
});

const returnUserSerializer = yup.object().shape({
  username: yup.string(),
  email: yup.string(),
  password: yup.string(),
  first_name: yup.string(),
  last_name: yup.string(),
  is_superuser: yup.string(),
  id: yup.string(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

const updateUserSerializer = yup.object().shape({
  username: yup.string(),
  email: yup.string(),
  password: yup.string(),
  first_name: yup.string(),
  last_name: yup.string(),
});

const listUsersSerializer = yup.array(returnUserSerializer);

export {
  createUserSerializer,
  returnUserSerializer,
  listUsersSerializer,
  updateUserSerializer,
};
