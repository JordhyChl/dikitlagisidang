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
import PAScreen from '../Views/PeriksaAki';
import PKBScreen from '../Views/PeriksaKabelBusi';
import PSScreen from '../Views/PeriksaSekring';
import SMScreen from '../Views/ServiceMobil';
import TBScreen from '../Views/TipsBerkendara';
import TSScreen from '../Views/TipsSatu';
import TDScreen from '../Views/TipsDua';

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
  {name: 'Periksa Aki', screen: PAScreen},
  {name: 'Periksa Kabel Busi', screen: PKBScreen},
  {name: 'Periksa Sekring', screen: PSScreen},
  {name: 'Service Mobil', screen: SMScreen},
  {name: 'Tips Berkendara', screen: TBScreen},
  {name: 'Tips Satu', screen: TSScreen},
  {name: 'Tips Dua', screen: TDScreen},
];
