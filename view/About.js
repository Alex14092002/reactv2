export class About extends Component {
    render() {
      const { description } = this.props;
  
      const container = document.createElement('div');
      container.textContent = description;
  
      return container;
    }
  }
  