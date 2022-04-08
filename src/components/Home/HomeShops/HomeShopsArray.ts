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
		}
	},
	{
		title: 'purinaOne',
		url: 'https://www.purina.de',
		icon: PurinaIcon,
		style: {
			width: '230px',
			justifyContent: 'flex-end',
		}
	},
	{
		title: 'HugoBoss',
		url: 'https://www.hugoboss.com/de/home',
		icon: HugoBossIcon,
		style: {
			width: '250px',
			justifyContent: 'flex-end',
		}
	},
	{
		title: 'TheNorthFace',
		url: 'https://www.thenorthface.de',
		icon: TheNorthFaceIcon,
		style: {
			width: '179px',
			justifyContent: 'flex-end',
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
		}
	},
	{
		title: 'Fila',
		url: 'https://www.fila.de',
		icon: FilaIcon,
		style: {
			width: '120px',
			transform: 'translateY(-30px)',
		}
	},
	{
		title: 'Benetton',
		url: 'https://de.benetton.com',
		icon: BenettonIcon,
		style: {
			width: '220px',
			transform: 'translateY(-30px)',
		}
	},
	{
		title: 'Adidas',
		url: 'https://www.adidas.de',
		icon: AdidasIcon,
		style: {
			width: '225px',
			transform: 'translateY(-20px)',
		}
	},
	{
		title: 'Ebay',
		url: 'https://www.ebay.de',
		icon: EbayIcon,
		style: {
			width: '260px',
			transform: 'translateY(-10px)',
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
		}
	},
	{
		title: 'Asos',
		url: 'https://www.asos.com/de/herren/',
		icon: AsosIcon,
		style: {
			width: '195px',
			transform: 'translateY(-45px)',
		}
	},
	{
		title: 'Ikea',
		url: 'https://www.ikea.com/de/de/',
		icon: IkeaIcon,
		style: {
			width: '270px',
			transform: 'translateY(-40px)',
		}
	},
	{
		title: 'Guess',
		url: 'https://www.guess.eu/de-de/home',
		icon: GuessIcon,
		style: {
			width: '235px',
			transform: 'translateY(-35px)',
		}
	},
	{
		title: 'Converse',
		url: 'https://www.converse.com/de/',
		icon: ConverseIcon,
		style: {
			width: '265px',
			transform: 'translateY(-30px)',

		}
	},
	{
		title: 'Deichmann',
		url: 'https://www.deichmann.com/de-de/',
		icon: DeichmannIcon,
		style: {
			width: '300px',
			transform: 'translateY(10px)'
		}
	},
	{
		title: 'Puma',
		url: 'https://eu.puma.com/de/de/home',
		icon: PumaIcon,
		style: {
			width: '105px',
			transform: 'translateY(-70px)',
		}
	},
	{
		title: 'Catawiki',
		url: 'https://www.catawiki.com/de/',
		icon: CatawikiIcon,
		style: {
			width: '230px',
			transform: 'translateY(-80px)',
		}
	},
	{
		title: 'Furla',
		url: 'https://www.furla.com/de/de/',
		icon: FurlaIcon,
		style: {
			width: '210px',
			transform: 'translateY(-60px)',
		}
	},
	{
		title: 'Uniqlo',
		url: 'https://www.uniqlo.com/de/de/home',
		icon: UniqloIcon,
		style: {
			width: '270px',
			transform: 'translateY(-70px)',
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
		}
	},
	{
		title: 'MassimoDutti',
		url: 'https://www.massimodutti.com/de',
		icon: MassimoDuttiIcon,
		style: {
			width: '180px',
			transform: 'translateY(-70px)',
		}
	},
	{
		title: 'Vans',
		url: 'https://www.vans.de',
		icon: VansIcon,
		style: {
			width: '240px',
			transform: 'translateY(-90px)',
		}
	},
	{
		title: 'ZARA',
		url: 'https://www.zara.com/de/en/',
		icon: ZaraIcon,
		style: {
			width: '260px',
			transform: 'translateY(-80px)',
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
		}
	},
	{
		title: 'Obi',
		url: 'https://www.obi.de',
		icon: ObiIcon,
		style: {
			width: '155px',
			transform: 'translateY(-80px)',
		}
	},
	{
		title: 'SOliver',
		url: 'https://www.soliver.eu/c/women/',
		icon: SOliverIcon,
		style: {
			width: '215px',
			transform: 'translateY(-70px)',
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
		}
	},
	{
		title: 'Pandora',
		url: 'https://de.pandora.net/de/',
		icon: PandoraIcon,
		style: {
			width: '215px',
			transform: 'translateY(-45px)',
		}
	},
	{
		title: 'Falke',
		url: 'https://www.falke.com/de_de/',
		icon: FalkeIcon,
		style: {
			width: '420px',
			transform: 'translateY(-50px)',
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
		}
	},
	{
		title: 'Nike',
		url: 'https://www.nike.com/de/',
		icon: NikeIcon,
		style: {
			marginRight: '50px',
			transform: 'translateY(-50px)',
		}
	},
];
