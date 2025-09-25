import lahoreImg from '../assets/branches/lahore.jpg'
import rawalpindiImg from '../assets/branches/rawalpindi.jpg'
import gujranwalaImg from '../assets/branches/gujranwala.jpeg'
import wahImg from '../assets/branches/wah.jpeg'
import ukImg from '../assets/branches/uk.jpg'
import malaysiaImg from '../assets/branches/malaysia.webp'
import uaeImg from '../assets/branches/uae.jpeg'

export const branches = {
  punjab: {
    name: 'Punjab',
    color: 'from-blue-600 to-blue-800',
    locations: [
      {
        name: 'Lahore',
        image: lahoreImg,
        address: 'Office # 31/2, Upper Ground, Mall of Lahore, 172 Tufail Road, Cantt Lahore.',
        phone: '+92 345 8454787',
        email: 'lahore@fes.com.pk'
      },
      {
        name: 'Rawalpindi',
        image: rawalpindiImg,
        address: 'Office No 115A-116, 1st Floor, Kohistan Tower, Mehfooz Shaheed Road, Saddar, Rawalpindi',
        phone: '03418454888',
        email: 'rawalpindi@fes.com.pk'
      },
      {
        name: 'Gujranwala',
        image: gujranwalaImg,
        address: 'Office 1-2, 1st Floor, Trust Plaza, GT Road, Gujranwala, Pakistan',
        phone: '+92 345 8454634',
        email: 'gujranwala@fes.com.pk'
      },
      {
        name: 'Wah Cantt',
        image: wahImg,
        address: 'Office 28-30, Al Kareem Arcade, Main Grand Trunk Rd, opposite Kohistan Enclave, Wah Cantt',
        phone: '+923458454773',
        email: 'wah@fes.com.pk'
      }
    ]
  },
  kpk: {
    name: 'KPK',
    color: 'from-green-600 to-green-800',
    locations: [
      {
        name: 'Peshawar',
        image: lahoreImg,
        address: 'Coming Soon - Peshawar Branch',
        phone: '+92 XXX XXXXXXX',
        email: 'peshawar@fes.com.pk'
      },
      {
        name: 'Abbottabad',
        image: lahoreImg,
        address: 'Coming Soon - Abbottabad Branch',
        phone: '+92 XXX XXXXXXX',
        email: 'abbottabad@fes.com.pk'
      },
      {
        name: 'Mardan',
        image: lahoreImg,
        address: 'Coming Soon - Mardan Branch',
        phone: '+92 XXX XXXXXXX',
        email: 'mardan@fes.com.pk'
      },
      {
        name: 'Swat',
        image: lahoreImg,
        address: 'Coming Soon - Swat Branch',
        phone: '+92 XXX XXXXXXX',
        email: 'swat@fes.com.pk'
      },
      {
        name: 'Nowshera',
        image: lahoreImg,
        address: 'Coming Soon - Nowshera Branch',
        phone: '+92 XXX XXXXXXX',
        email: 'nowshera@fes.com.pk'
      }
    ]
  },
  international: {
    name: 'International',
    color: 'from-purple-600 to-purple-800',
    locations: [
      {
        name: 'United Kingdom',
        image: ukImg,
        address: 'London Office - Coming Soon',
        phone: '+44 XXXX XXXXXX',
        email: 'uk@fes.com.pk'
      },
      {
        name: 'Malaysia',
        image: malaysiaImg,
        address: 'Kuala Lumpur Office - Coming Soon',
        phone: '+60 XX XXX XXXX',
        email: 'malaysia@fes.com.pk'
      },
      {
        name: 'UAE',
        image: uaeImg,
        address: 'Dubai Office - Coming Soon',
        phone: '+971 XX XXX XXXX',
        email: 'uae@fes.com.pk'
      }
    ]
  }
}
