import { MenuViewModel } from "./view-models/menu.view-model";
import { Card, Row, Col, Typography } from "antd";
import Image from "next/image";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export interface HomePageProps {
  menus: MenuViewModel[];
}

const HomePage = ({ menus }: HomePageProps) => {
  return (
    <div>
      <p>Home Page always works</p>
      <div>
        <Row>
          {menus.map((menu) => (
            <Col key={menu.name} span={8}>
              <Card
                title={`${menu.name} - ${menu.price} pesos`}
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Card
                  cover={
                    <Image
                      src={menu.imageUrl}
                      alt={`Picture of ${menu.name}`}
                      objectFit="cover"
                      layout="fill"
                    />
                  }
                ></Card>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export { HomePage };
