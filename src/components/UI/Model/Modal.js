import React from "react";

import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <Aux>
      {props.show ? <Backdrop clicked={props.close} /> : null}
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default React.memo(Modal);

// converting functional component to class based component to optimise the performance
// export default class Modal extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     // console.log(nextProps.show);
//     // console.log(this.props.show);
//     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;

//     // return true;
//   }

//   render() {
//     // console.log("this is runnig on modal.js");
//     return (
//       <Aux>
//         {this.props.show ? <Backdrop clicked={this.props.orderReadyStateChange} /> : null}
//         <div
//           className={classes.Modal}
//           style={{
//             transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
//             opacity: this.props.show ? "1" : "0",
//           }}
//         >
//           {this.props.children}
//         </div>
//       </Aux>
//     );
//   }
// }
