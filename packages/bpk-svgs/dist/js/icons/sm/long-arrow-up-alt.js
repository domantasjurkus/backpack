import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M14.5 6.4l-4-3.8c-.9-.8-2.2-.8-3.1 0l-4 3.8c-.5.6-.6 1.5 0 2.1s1.5.7 2.1.1l2-1.9v7.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V6.7l2 1.9c.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5.6-.6.5-1.5-.1-2.1z" /></svg>;
  }

}