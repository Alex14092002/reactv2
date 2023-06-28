class Home extends Component {
    render() {
      const { name } = this.props;
      const greeting = `Hello, ${name}!`;
  
      const container = document.createElement('div');
      container.textContent = greeting;
  
      return container;
    }
  }
  