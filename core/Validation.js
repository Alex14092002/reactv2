const Validation = {
    validateProps(props, propTypes) {
      for (const propName in propTypes) {
        if (!props.hasOwnProperty(propName)) {
          throw new Error(`Missing required prop: ${propName}`);
        }
  
        const propType = propTypes[propName];
  
        if (typeof props[propName] !== propType) {
          throw new Error(`Invalid prop type for ${propName}. Expected ${propType}, received ${typeof props[propName]}`);
        }
      }
    },
  };
  