import {
  FiGrid,
  FiShoppingBag,
  FiCheckSquare 
} from 'react-icons/fi';
/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const sidebar = [
  {
    path: '/dashboard', // the url
    icon: FiGrid, // icon
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/collections',
    icon: FiShoppingBag,
    name: 'Collections',
  },
];

export default sidebar;
