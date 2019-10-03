import Home from '../../container/pages/Home';
import About from '../../container/pages/About';
import Contacts from '../../container/pages/Contacts';

const pageRoutes = () => {
  return [
    {
      component: Home,
      path: '/home',
      link: '/home',
      icon: 'home',
      name: 'HOME'
    },
    {
      component: About,
      path: '/about',
      link: '/about',
      icon: 'user',
      name: 'Navigasi User'
    },
    {
      component: Contacts,
      path: '/contacts',
      link: '/contacts',
      icon: 'contacts',
      name: 'Navigasi Contact'
    }
  ];
};

export default pageRoutes();
