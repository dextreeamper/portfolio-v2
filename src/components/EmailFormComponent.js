import React, { Component } from 'react';

class EmailFormComponent extends Component {
  
  render() {
    return (
        <form className="forms" action="https://formspree.io/dextreeamper@gmail.com" method="POST">
          <input class="input" type="text" name="name" placeholder="Fill with your name" />
          <input class="input" type="email" name="_replyto" placeholder="now your email@address.com" />
          <input class="input" type="text" name="message" placeholder="now write your awesome message." />
          <input type="submit" value="SUBMIT" />
        </form>
      );
  }
}

export default EmailFormComponent;
