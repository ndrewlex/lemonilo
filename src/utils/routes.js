import HomePage from './../pages/home';
import NotifPage from './../pages/notifikasi';
import HomeIcon from './../assets/bottom-menu/home.svg';
import NotifIcon from './../assets/bottom-menu/notifikasi.svg';
import LifeIcon from './../assets/bottom-menu/life.svg';
import OrderIcon from './../assets/bottom-menu/pesanan.svg';
import ProfileIcon from './../assets/bottom-menu/profil-saya.svg';

export default routes = [
  {
    path: '/',
    exact: true,
    icon: HomeIcon,
    title: 'Home',
    component: HomePage,
  },
  {
    path: '/notifikasi',
    exact: false,
    icon: NotifIcon,
    title: 'Notifikasi',
    component: NotifPage,
  },
];
