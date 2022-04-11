import {IShopsData} from '@/components/Home/HomeShops/HomeShopsList/type';
import AmazonIcon from '@/UIIcon/shopsIcon/amazone.svg';
import PurinaIcon from '@/UIIcon/shopsIcon/purinaOne.svg';
import HugoBossIcon from '@/UIIcon/shopsIcon/hugoBoss.svg';
import TheNorthFaceIcon from '@/UIIcon/shopsIcon/tnf.svg';
import DisneyIcon from '@/UIIcon/shopsIcon/Disney.svg';
import FilaIcon from '@/UIIcon/shopsIcon/fila.svg';
import TheBodyShopIcon from '@/UIIcon/shopsIcon/theBodyShop.svg';
import BenettonIcon from '@/UIIcon/shopsIcon/benetton.svg';
import AdidasIcon from '@/UIIcon/shopsIcon/adidas.svg';
import EbayIcon from '@/UIIcon/shopsIcon/ebay.svg';
import RalphLaurenIcon from '@/UIIcon/shopsIcon/ralphLauren.svg';
import AsosIcon from '@/UIIcon/shopsIcon/asos.svg';
import IkeaIcon from '@/UIIcon/shopsIcon/ikea.svg';
import GuessIcon from '@/UIIcon/shopsIcon/GUESS.svg';
import ConverseIcon from '@/UIIcon/shopsIcon/converse.svg';
import OyshoIcon from '@/UIIcon/shopsIcon/oysho.svg';
import DeichmannIcon from '@/UIIcon/shopsIcon/deichmann.svg';
import PumaIcon from '@/UIIcon/shopsIcon/puma.svg';
import CatawikiIcon from '@/UIIcon/shopsIcon/catawiki.svg';
import FurlaIcon from '@/UIIcon/shopsIcon/furla.svg';
import VansIcon from '@/UIIcon/shopsIcon/vans.svg';
import UniqloIcon from '@/UIIcon/shopsIcon/uniqlo.svg';
import ZaraIcon from '@/UIIcon/shopsIcon/zara.svg';
import LevisIcon from '@/UIIcon/shopsIcon/levis.svg';
import MassimoDuttiIcon from '@/UIIcon/shopsIcon/massimoDutti.svg';
import ObiIcon from '@/UIIcon/shopsIcon/obi.svg';
import SOliverIcon from '@/UIIcon/shopsIcon/sOliver.svg';
import CrocsIcon from '@/UIIcon/shopsIcon/crocs.svg';
import HMIcon from '@/UIIcon/shopsIcon/hm.svg';
import EccoIcon from '@/UIIcon/shopsIcon/ecco.svg';
import TimberlandIcon from '@/UIIcon/shopsIcon/timberland.svg';
import PandoraIcon from '@/UIIcon/shopsIcon/pandora.svg';
import FalkeIcon from '@/UIIcon/shopsIcon/falke.svg';
import AsicsIcon from '@/UIIcon/shopsIcon/asics.svg';
import NikeIcon from '@/UIIcon/shopsIcon/nike.svg';

export const shopsData: IShopsData[] = [
	{
		title: 'amazon',
		url: 'https://www.amazon.de',
		icon: AmazonIcon,
		style: {
			width: '235px',
			justifyContent: 'flex-end',
		},
		initialSize: {
			width: '111px',
			height: '30px'
		}
	},
	{
		title: 'purinaOne',
		url: 'https://www.purina.de',
		icon: PurinaIcon,
		style: {
			width: '230px',
			justifyContent: 'flex-end',
		},
		initialSize: {
			width: '83px',
			height: '33px'
		}
	},
	{
		title: 'HugoBoss',
		url: 'https://www.hugoboss.com/de/home',
		icon: HugoBossIcon,
		style: {
			width: '250px',
			justifyContent: 'flex-end',
		},
		initialSize: {
			width: '106px',
			height: '38px'
		}
	},
	{
		title: 'TheNorthFace',
		url: 'https://www.thenorthface.de',
		icon: TheNorthFaceIcon,
		style: {
			width: '179px',
			justifyContent: 'flex-end',
		},
		initialSize: {
			width: '91px',
			height: '42px'
		}
	},
	{
		title: 'TheBodyShop',
		url: 'https://www.thebodyshop.com/de-de/',
		icon: TheBodyShopIcon,
		style: {
			width: '190px',
			justifyContent: 'center',
			transform: 'translateY(0px)',
		},
		initialSize: {
			width: '79px',
			height: '75px'
		}
	},
	{
		title: 'Disney',
		url: 'https://www.shopdisney.de/',
		icon: DisneyIcon,
		style: {
			width: '130px',
			justifyContent: 'flex-start',
			transform: 'translateY(10px)',
		},
		initialSize: {
			width: '104px',
			height: '43px'
		}
	},
	{
		title: 'Fila',
		url: 'https://www.fila.de',
		icon: FilaIcon,
		style: {
			width: '120px',
			transform: 'translateY(-30px)',
		},
		initialSize: {
			width: '104px',
			height: '35px'
		}
	},
	{
		title: 'Benetton',
		url: 'https://de.benetton.com',
		icon: BenettonIcon,
		style: {
			width: '220px',
			transform: 'translateY(-30px)',
		},
		initialSize: {
			width: '58px',
			height: '47px'
		}
	},
	{
		title: 'Adidas',
		url: 'https://www.adidas.de',
		icon: AdidasIcon,
		style: {
			width: '225px',
			transform: 'translateY(-20px)',
		},
		initialSize: {
			width: '72px',
			height: '48px'
		}
	},
	{
		title: 'Ebay',
		url: 'https://www.ebay.de',
		icon: EbayIcon,
		style: {
			width: '260px',
			transform: 'translateY(-10px)',
		},
		initialSize: {
			width: '118px',
			height: '48px'
		}
	},
	{
		title: 'RalphLauren',
		url: 'https://www.ralphlauren.de',
		icon: RalphLaurenIcon,
		style: {
			width: '345px',
			justifyContent: 'flex-end',
			marginRight: '10px',
			transform: 'translateY(10px)',
		},
		initialSize: {
			width: '152px',
			height: '24px'
		}
	},
	{
		title: 'Asos',
		url: 'https://www.asos.com/de/herren/',
		icon: AsosIcon,
		style: {
			width: '195px',
			transform: 'translateY(-45px)',
		},
		initialSize: {
			width: '104px',
			height: '30px'
		}
	},
	{
		title: 'Ikea',
		url: 'https://www.ikea.com/de/de/',
		icon: IkeaIcon,
		style: {
			width: '270px',
			transform: 'translateY(-40px)',
		},
		initialSize: {
			width: '104px',
			height: '37px'
		}
	},
	{
		title: 'Guess',
		url: 'https://www.guess.eu/de-de/home',
		icon: GuessIcon,
		style: {
			width: '235px',
			transform: 'translateY(-35px)',
		},
		initialSize: {
			width: '102px',
			height: '22px'
		}
	},
	{
		title: 'Converse',
		url: 'https://www.converse.com/de/',
		icon: ConverseIcon,
		style: {
			width: '265px',
			transform: 'translateY(-30px)',
		},
		initialSize: {
			width: '95px',
			height: '64px',
		}
	},
	{
		title: 'Deichmann',
		url: 'https://www.deichmann.com/de-de/',
		icon: DeichmannIcon,
		style: {
			width: '300px',
			transform: 'translateY(10px)'
		},
		initialSize: {
			width: '100px',
			height: '86px'
		}
	},
	{
		title: 'Puma',
		url: 'https://eu.puma.com/de/de/home',
		icon: PumaIcon,
		style: {
			width: '105px',
			transform: 'translateY(-70px)',
		},
		initialSize: {
			width: '88px',
			height: '44px'
		}
	},
	{
		title: 'Catawiki',
		url: 'https://www.catawiki.com/de/',
		icon: CatawikiIcon,
		style: {
			width: '230px',
			transform: 'translateY(-80px)',
		},
		initialSize: {
			width: '142px',
			height: '42px'
		}
	},
	{
		title: 'Furla',
		url: 'https://www.furla.com/de/de/',
		icon: FurlaIcon,
		style: {
			width: '210px',
			transform: 'translateY(-60px)',
		},
		initialSize: {
			width: '105px',
			height: '20px'
		}
	},
	{
		title: 'Uniqlo',
		url: 'https://www.uniqlo.com/de/de/home',
		icon: UniqloIcon,
		style: {
			width: '270px',
			transform: 'translateY(-70px)',
		},
		initialSize: {
			width: '73px',
			height: '73px'
		}
	},
	{
		title: 'Oysho',
		url: 'https://www.oysho.com/de/',
		icon: OyshoIcon,
		style: {
			width: '300px',
			marginRight: '50px',
			transform: 'translateY(-55px)',
		},
		initialSize: {
			width: '124px',
			height: '24px'
		}
	},
	{
		title: 'Levis',
		url: 'https://www.levi.com/DE/de_DE/',
		icon: LevisIcon,
		style: {
			width: '220px',
			marginRight: '50px',
			transform: 'translateY(-70px)',
		},
		initialSize: {
			width: '104px',
			height: '51px'
		}
	},
	{
		title: 'MassimoDutti',
		url: 'https://www.massimodutti.com/de',
		icon: MassimoDuttiIcon,
		style: {
			width: '180px',
			transform: 'translateY(-70px)',
		},
		initialSize: {
			width: '149px',
			height: '23px'
		}
	},
	{
		title: 'Vans',
		url: 'https://www.vans.de',
		icon: VansIcon,
		style: {
			width: '240px',
			transform: 'translateY(-90px)',
		},
		initialSize: {
			width: '88px',
			height: '59px'
		}
	},
	{
		title: 'ZARA',
		url: 'https://www.zara.com/de/en/',
		icon: ZaraIcon,
		style: {
			width: '260px',
			transform: 'translateY(-80px)',
		},
		initialSize: {
			width: '99px',
			height: '42px'
		}
	},
	{
		title: 'HM',
		url: 'https://www2.hm.com/de_de/index.html',
		icon: HMIcon,
		style: {
			width: '180px',
			marginRight: '15px',
			transform: 'translateY(-20px)',
		},
		initialSize: {
			width: '101px',
			height: '68px'
		}
	},
	{
		title: 'Ecco',
		url: 'https://www.eccoshop.de',
		icon: EccoIcon,
		style: {
			width: '220px',
			justifyContent: 'flex-start',
			transform: 'translateY(-70px)',
		},
		initialSize: {
			width: '106px',
			height: '30px'
		}
	},
	{
		title: 'Timberland',
		url: 'https://www.timberland.de',
		icon: TimberlandIcon,
		style: {
			width: '220px',
			justifyContent: 'flex-start',
			transform: 'translateY(-70px)',
		},
		initialSize: {
			width: '170px',
			height: '30px'
		}
	},
	{
		title: 'Obi',
		url: 'https://www.obi.de',
		icon: ObiIcon,
		style: {
			width: '155px',
			transform: 'translateY(-80px)',
		},
		initialSize: {
			width: '115px',
			height: '29px'
		}
	},
	{
		title: 'SOliver',
		url: 'https://www.soliver.eu/c/women/',
		icon: SOliverIcon,
		style: {
			width: '215px',
			transform: 'translateY(-70px)',
		},
		initialSize: {
			width: '103px',
			height: '35px'
		}
	},
	{
		title: 'Crocs',
		url: 'https://www.crocs.de',
		icon: CrocsIcon,
		style: {
			width: '155px',
			marginRight: '200px',
			transform: 'translateY(-35px)',
		},
		initialSize: {
			width: '96px',
			height: '27px'
		}
	},
	{
		title: 'Pandora',
		url: 'https://de.pandora.net/de/',
		icon: PandoraIcon,
		style: {
			width: '215px',
			transform: 'translateY(-45px)',
		},
		initialSize: {
			width: '140px',
			height: '28px'
		}
	},
	{
		title: 'Falke',
		url: 'https://www.falke.com/de_de/',
		icon: FalkeIcon,
		style: {
			width: '420px',
			transform: 'translateY(-50px)',
		},
		initialSize: {
			width: '228px',
			height: '24px'
		}
	},
	{
		title: 'Asics',
		url: 'https://www.asics.com/de/de-de/',
		icon: AsicsIcon,
		style: {
			marginLeft: '85px',
			justifyContent: 'flex-start',
			flexGrow: 1,
			transform: 'translateY(-50px)',
		},
		initialSize: {
			width: '105px',
			height: '34px'
		}
	},
	{
		title: 'Nike',
		url: 'https://www.nike.com/de/',
		icon: NikeIcon,
		style: {
			marginRight: '50px',
			transform: 'translateY(-50px)',
		},
		initialSize: {
			width: '106px',
			height: '38px'
		}
	},
];
