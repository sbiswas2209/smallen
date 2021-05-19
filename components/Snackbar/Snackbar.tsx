/* eslint-disable */
import React, { PureComponent } from 'react';
import styles from './Snackbar.module.css';

// type MyProps = {
//   // using `interface` is also ok
//   // message: string;
// };

// type MyState = {
//   isActive: boolean;
//   // message: string;
// };

// export class Snackbar extends React.Component<MyProps, MyState> {
//   message: string | undefined;

//   constructor(props: MyProps) {
//     super(props);

//     this.state = {
//       isActive: false,
//       // message: ''
//     };
//   }

export class Snackbar extends PureComponent<{}, {isActive:boolean}> {
  message = '';

  constructor(props: any) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  openSnackBar = (message = 'Something went wrong...') => {
    this.message = message;
    this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 3000);
    });
  };

  closeSnackBar = () => {
    this.setState({ isActive: false });
  };

  render() {
    const { isActive } = this.state;
    return (
      <div
        className={
          isActive
            ? [styles.snackbar, styles.show, 'bg-black dark:bg-white text-white dark:text-black'].join(' ')
            : styles.snackbar
        }
      >
        {this.message}
      </div>
    );
  }
}

// export default Snackbar;
