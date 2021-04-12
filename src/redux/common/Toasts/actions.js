import { ADD_TOAST, REMOVE_TOAST } from "./types";
import createToast from "./createToast";

const addToast = (options = {}) => {
  return {
    payload: createToast(options),
    type: ADD_TOAST,
  };
};

const removeToast = (id) => {
  return {
    payload: id,
    type: REMOVE_TOAST,
  };
};

const ToastsActions = {
  addToast,
  removeToast,
};

export default ToastsActions;
