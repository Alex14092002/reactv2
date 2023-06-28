class Router {
    constructor(routes) {
      this.routes = routes;
      this.currentRoute = null;
    }
  
    handleRouteChange() {
      const path = window.location.pathname;
  
      for (const route of this.routes) {
        if (route.path === path) {
          this.currentRoute = route;
          break;
        }
      }
  
      if (this.currentRoute) {
        const component = new this.currentRoute.component();
        component.display();
      }
    }
  
    init() {
      this.handleRouteChange();
  
      window.onpopstate = () => {
        this.handleRouteChange();
      };
  
      const links = document.querySelectorAll('a[data-link]');
  
      for (const link of links) {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const path = link.getAttribute('href');
          window.history.pushState({}, path, window.location.origin + path);
          this.handleRouteChange();
        });
      }
    }
  }
  