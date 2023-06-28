class Contact extends Component {
    render() {
      const { email } = this.props;
  
      const container = document.createElement('div');
      container.textContent = `Contact us at ${email}`;
  
      return container;
    }
  }
  