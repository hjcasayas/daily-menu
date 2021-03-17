import { DishViewModel } from "./view-models/dish.view-model";
import { Card, Row, Col, Typography, Layout, Button, Empty } from "antd";
import Image from "next/image";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Fragment, useState } from "react";
import { OrderViewModel } from "./view-models/order.view-model";

export interface HomePageProps {
  menu: DishViewModel[];
}

const HomePage = ({ menu }: HomePageProps) => {
  const [orders, setOrders] = useState<OrderViewModel[]>([]);

  const setCount = (dishId: number, crement: number) => {
    let currentOrder = orders.find(order => order.dishId === dishId);
    if(!currentOrder) {
      const currentMenu = menu.find(dish => dish.id === dishId);
      currentOrder = {dishId: currentMenu.id, count: 0, dishName: currentMenu.name};
    }
    const nextCount = currentOrder.count + crement;
    currentOrder = {...currentOrder, count: nextCount < 0 ? 0 : nextCount}

    let currentOrders = orders;
    const currentOrderIndex = currentOrders.findIndex(order => order.dishId === currentOrder.dishId);

    if(currentOrderIndex >= 0) {
      currentOrders[currentOrderIndex] = currentOrder;
    } else {
      currentOrders = [...currentOrders, currentOrder];
    }

    setOrders([...currentOrders.filter(order => order.count !== 0)]);
  }

  return (
    <Layout>
        <Layout.Header>
        <Typography.Title>Donvers Daily Menu</Typography.Title>
        </Layout.Header>
        <Layout>
          <Layout.Content>
              <Row>
                {menu.map((dish) => (
                  <Col key={dish.id} span={8}>
                    <Card
                      title={dish.name}
                      actions={[
                        <MinusOutlined key="minus" onClick={() => setCount(dish.id, -1)} />,
                        <Typography.Text key="count" strong>
                          {orders.find((order) => order.dishId === dish.id)?.count ||
                            0}
                        </Typography.Text>,
                        <PlusOutlined key="plus" onClick={() => setCount(dish.id, 1)}/>,
                      ]}
                    >
                      <Card
                        style={{ height: 410 }}
                        cover={
                          <Image
                            src={dish.imageUrl}
                            alt={`Picture of ${dish.name}`}
                            objectFit="cover"
                            layout="fill"
                          />
                        }
                      ></Card>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Layout.Content>
          <Layout.Sider theme="light">
            <Card title="Order Summary">
              {orders.map(order => (
                <>
                  <div>{order.dishName}</div>
                  <div>{order.count}</div>
                </>
              ))}
              {
                orders.length ? <Button>Copy to Clipboard</Button> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>No Orders</span>} />
              }
            </Card>
          </Layout.Sider>
        </Layout>
    </Layout>
  );
};

export { HomePage };
