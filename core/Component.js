class Component {
    constructor(props) {
      this.props = props;
      this.state = {};
      this.prevProps = {};
    }
  
    shouldUpdate() {
      return JSON.stringify(this.props) !== JSON.stringify(this.prevProps);
    }
  
    render() {
      // Triển khai phần giao diện của component
    }
  
    display(newProps) {
      this.prevProps = this.props;
      this.props = newProps;
  
      if (this.shouldUpdate()) {
        const component = this.render();
        component.display();
      }
    }
  }
  