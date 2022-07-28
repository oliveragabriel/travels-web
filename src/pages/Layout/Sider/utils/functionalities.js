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
import { styleIconSizeTwentyAndColor } from '../../../../utils/styles';


export const functionalities = (navigate = () => {}) => {
  return [
    { label: 'Início', key: 'home', icon: <InfoOutlined style={styleIconSizeTwentyAndColor}/>, onClick: () => navigate('/home') },
    { label: 'Viagens', key: 'travels', icon: <RocketOutlined style={styleIconSizeTwentyAndColor}/>, onClick: () => navigate('/travels')},
    { label: 'Trajetos', key: 'paths', icon: <ProfileOutlined style={styleIconSizeTwentyAndColor}/>},
    { label: 'Hospedagens', key: 'accommodations', icon: <HomeOutlined style={styleIconSizeTwentyAndColor} />},
    { label: 'Transportes', key: 'transports', icon: <CarOutlined style={styleIconSizeTwentyAndColor} />},
    { label: 'Pontos Turísticos', key: 'places', icon: <EnvironmentOutlined style={styleIconSizeTwentyAndColor} />},
    { label: 'Desejos', key: 'wishes', icon: <HeartOutlined style={styleIconSizeTwentyAndColor} />},
    { label: 'Conquistas', key: 'conquests', icon: <TrophyOutlined style={styleIconSizeTwentyAndColor} /> },
  ]
};