import React from "react";
import { Button, Carousel, Row, Col, List, Divider, Avatar } from "antd";
import { 
  RocketOutlined, 
  TrophyOutlined, 
  EnvironmentOutlined, 
  ProfileOutlined, 
  PlusCircleTwoTone, 
  GlobalOutlined 
} from '@ant-design/icons';
import { 
  styleCarouselContent, 
  styleIconSizeThirty, 
  styleIconSizeThirtyAndColor, 
  styleIconSizeThirtyAndGhost 
} from '../utils/styles';

export const Home = () => {
  return (
    <>
      <Row gutter={12}>
        <Col sm={24} md={12}>
          <Row justify='space-between' align='middle' style={{ padding: 12 }}>
            <RocketOutlined style={styleIconSizeThirtyAndColor}/>
            <h3>Destinos</h3>
            <Button
              icon={<PlusCircleTwoTone style={styleIconSizeThirty} />}
              type='text'
              title='Mais Destinos'
              style={{ minWidth: 0 }}
            />
          </Row>
          <Carousel autoplay>
            <div>
              <h3 style={styleCarouselContent}>Cancún</h3>
            </div>
            <div>
              <h3 style={styleCarouselContent}>Buenos Aires</h3>
            </div>
            <div>
              <h3 style={styleCarouselContent}>Cusco</h3>
            </div>
            <div>
              <h3 style={styleCarouselContent}>Playa del Carmen</h3>
            </div>
            <div>
              <h3 style={styleCarouselContent}>Ciudad de México</h3>
            </div>
          </Carousel>
        </Col>
        <Col sm={24} md={12}>
          <Row justify='space-between' align='middle' style={{ padding: 12 }}>
            <EnvironmentOutlined style={styleIconSizeThirtyAndColor}/> 
            <h3>Pontos Turísticos</h3>
            <Button
              icon={<PlusCircleTwoTone style={styleIconSizeThirty} />}
              type='text'
              title='Mais Pontos Turísticos'
              style={{ minWidth: 0 }}
            />
          </Row>
            <Carousel autoplay>
              <div>
                <h3 style={styleCarouselContent}>Machu Picchu</h3>
              </div>
              <div>
                <h3 style={styleCarouselContent}>Chichén Itzá</h3>
              </div>
              <div>
                <h3 style={styleCarouselContent}>La Bombonera</h3>
              </div>
              <div>
                <h3 style={styleCarouselContent}>Teotihuacán</h3>
              </div>
              <div>
                <h3 style={styleCarouselContent}>Xcaret Park</h3>
              </div>
            </Carousel>
        </Col>      
      </Row>
      <Divider><GlobalOutlined style={styleIconSizeThirtyAndGhost}/></Divider>
      <Row gutter={12}>
        <Col sm={24} md={12}>
          <Row justify='space-between' align='middle' style={{ padding: 12 }}>
            <ProfileOutlined style={styleIconSizeThirtyAndColor}/>
            <h3>Trajetos</h3>
            <Button
              icon={<PlusCircleTwoTone style={styleIconSizeThirty} />}
              type='text'
              title='Mais Trajetos'
              style={{ minWidth: 0 }}
            />
          </Row>
          <List
            size="small"
            itemLayout="horizontal"
            // dataSource={data}              
            bordered
            renderItem={item => <List.Item>
              <List.Item.Meta
                title={<p>{item.title}</p>}
                description={<p>{item.description}</p>}
              />
            </List.Item>}
          />
        </Col>
        <Col sm={24} md={12}>
          <Row justify='space-between' align='middle' style={{ padding: 12 }}>
            <TrophyOutlined style={styleIconSizeThirtyAndColor}/>
            <h3>Conquistas</h3>
            <Button
              icon={<PlusCircleTwoTone style={styleIconSizeThirty} />}
              type='text'
              title='Mais Conquistas'
              style={{ minWidth: 0 }}
            />
          </Row>
          <List
            size="small"
            itemLayout="horizontal"
            // dataSource={data}              
            bordered
            renderItem={item => <List.Item>
              <List.Item.Meta
                avatar={<Avatar />}
                title={<p>{item.title}</p>}
                description={<p>{item.description}</p>}
              />
            </List.Item>}
          />
        </Col>
      </Row>
    </>
  )
};