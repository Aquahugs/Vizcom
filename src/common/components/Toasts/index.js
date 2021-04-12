import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Toast from "../Toast";
import ToastsActions from "../../../redux/common/Toasts/actions";

const Toasts = ({ removeToast, toasts }) => {
  return (
    <ul className="toasts">
      {toasts?.map((toast) => {
        const { id } = toast;
        return (
          <Toast {...toast} key={id} onDismissClick={() => removeToast(id)} />
        );
      })}
    </ul>
  );
};

Toasts.propTypes = {
  actions: PropTypes.shape({
    removeToast: PropTypes.func.isRequired,
  }).isRequired,
  toasts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = { removeToast: ToastsActions.removeToast };

const mapStateToProps = (state) => ({
  toasts: state.notification,
});

export default connect(mapStateToProps, mapDispatchToProps)(Toasts);
