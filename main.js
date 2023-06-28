import { Router } from './core/Router.js';
import { Home } from './view/Home.js';
import { About } from './view/About.js';
import { Contact } from './view/Contact.js';
import { HeaderComponent } from './component/HeaderComponent.js';
import { FooterComponent } from './component/FooterComponent.js';

// Định nghĩa routes
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  },
];

// Khởi tạo Router
const router = new Router(routes);
router.init();

// Tạo các component
const header = new HeaderComponent();
const footer = new FooterComponent();

// Thêm component vào DOM
const root = document.getElementById('root');
root.appendChild(header.render());
root.appendChild(footer.render());
