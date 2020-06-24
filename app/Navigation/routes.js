import TravelScreen from '../Views/Travel';
import BookingScreen from '../Views/Booking';
import AboutScreen from '../Views/About';
import CreditsScreen from '../Views/Credits';
import MMScreen from '../Views/MobilMogok';
import BKScreen from '../Views/BanKempis';
import TempScreen from '../Views/TemperaturNaik';
import STScreen from '../Views/ServiceTips';
import GScreen from '../Views/Games';
import WScreen from '../Views/Workshop';
import Workshop from '../Views/Workshop';

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  {name: 'Troubleshoot', screen: TravelScreen, icon: 'toolbox'},
  {name: 'Service & Tips', screen: STScreen, icon: 'information-outline'},
  {name: 'Workshop', screen: Workshop, icon: 'google-maps'},
  {name: 'Games', screen: GScreen, icon: 'gamepad'},
  {name: 'Mobil Mogok', screen: MMScreen},
  {name: 'Ban Kempis', screen: BKScreen},
  {name: 'Temperatur Naik', screen: TempScreen},
  {name: 'About', screen: AboutScreen},
  {name: 'Credits', screen: CreditsScreen},
];
