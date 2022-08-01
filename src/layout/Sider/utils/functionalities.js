import { 
  InfoOutlined, 
  RocketOutlined, 
  TrophyOutlined, 
  HomeOutlined, 
  CarOutlined, 
  HeartOutlined, 
  EnvironmentOutlined, 
  ProfileOutlined 
} from '@ant-design/icons';
import { styleIconSizeTwentyAndColor } from '../../../utils/styles';


export const functionalities = (isLogged, navigate = () => {}) => { 
  if(isLogged === true) {
    return [
      { label: 'Início', key: 'home', icon: <InfoOutlined style={styleIconSizeTwentyAndColor}/>, onClick: () => navigate('/home') },
      { label: 'Viagens', key: 'travels', icon: <RocketOutlined style={styleIconSizeTwentyAndColor}/>, onClick: () => navigate('/travels')},
      { label: 'Trajetos', key: 'routes', icon: <ProfileOutlined style={styleIconSizeTwentyAndColor}/>, onClick: () => navigate('/routes')},
      { label: 'Hospedagens', key: 'accommodations', icon: <HomeOutlined style={styleIconSizeTwentyAndColor} />, onClick: () => navigate('/accommodations')},
      { label: 'Transportes', key: 'transports', icon: <CarOutlined style={styleIconSizeTwentyAndColor} />, onClick: () => navigate('/transports')},
      { label: 'Pontos Turísticos', key: 'attractions', icon: <EnvironmentOutlined style={styleIconSizeTwentyAndColor} />, onClick: () => navigate('/attractions')},
      { label: 'Desejos', key: 'wishes', icon: <HeartOutlined style={styleIconSizeTwentyAndColor} />, onClick: () => navigate('/wishes')},
      { label: 'Conquistas', key: 'conquests', icon: <TrophyOutlined style={styleIconSizeTwentyAndColor} />, onClick: () => navigate('/conquests')}
    ]
  } else {
    return [
      { label: 'Início', key: 'home', icon: <InfoOutlined style={styleIconSizeTwentyAndColor}/>, onClick: () => navigate('/home') },
      { label: 'Trajetos', key: 'routes', icon: <ProfileOutlined style={styleIconSizeTwentyAndColor}/>, onClick: () => navigate('/routes')},
      { label: 'Hospedagens', key: 'accommodations', icon: <HomeOutlined style={styleIconSizeTwentyAndColor} />, onClick: () => navigate('/accommodations')},
      { label: 'Transportes', key: 'transports', icon: <CarOutlined style={styleIconSizeTwentyAndColor} />, onClick: () => navigate('/transports')},
      { label: 'Pontos Turísticos', key: 'attractions', icon: <EnvironmentOutlined style={styleIconSizeTwentyAndColor} />, onClick: () => navigate('/attractions')}
    ]
  }
};