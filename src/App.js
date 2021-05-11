import React from 'react';
import logo from './logo.svg';
import { Form, Input, Select, Button, Spin, List } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import './App.css';

const { Option } = Select;

const helpers = {
  loading: false,
  items: []
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    }
    helpers.loading = false
    this.increment = this.increment.bind(this);
    this.items = []
  }

  increment(e) {
    this.setState({ contador: this.state.contador + 1 });
    e.preventDefault()
  }

  onFinish = (values) => {
    const search = values.searchType === '-1' ? '' : values.searchType;
    helpers.loading = true
    fetch("http://localhost:3100/" + search)
      .then(res => res.json())
      .then(
        (result) => {
          helpers.items = result
        },
        (error) => {
          helpers.items = [];
        }
      )
      .then(() => {
        helpers.loading = false
        this.setState(this.state)
      })
  }

  like = (e, item) => {
    e.preventDefault()
    item.likes = item.likes | 0
    item.likes++
    this.setState(this.state)
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Clic para contar, actualmente el valor es: {this.state.contador}.
          </p>
          <a
            className="App-link"
            href=""
            onClick={e => this.increment(e)}
          >
            Incrementar Contador {this.busqueda}
          </a>
        </header>
        <br />
        <Spin spinning={helpers.loading}>
          <div style={{ padding: '100px' }}>
            <h1>Consulta de servicio web</h1>
            <Form
              name="basic"
              initialValues={{
                searchType: '',
              }}
              onFinish={this.onFinish}
            >
              <Form.Item
                label="Buscar tipo"
                name="searchType"
                rules={[
                  {
                    required: true,
                    message: 'Por favor seleccione un filtro',
                  },
                ]}
              >
                <Select placeholder="Seleccione un tipo por favor" allowClear>
                  <Option value="Series">Series</Option>
                  <Option value="Peliculas">Peliculas</Option>
                  <Option value="-1">Todas</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Buscar
              </Button>
              </Form.Item>
            </Form>
            <br />
            <List
              dataSource={helpers.items}
              renderItem={item => (
                <List.Item
                  actions={[<a key="like" onClick={e => this.like(e, item)}>
                    <LikeOutlined />
                  </a>]}
                >
                  <List.Item.Meta
                    title={<a href="#">{item.title}</a>}
                    description={`ID: ${item.id} Año: ${item.year} Tipo: ${item.type} Cantidad Likes: ${item.likes|0}`}
                  />
                </List.Item>
              )}
            />

          </div>
        </Spin>
      </div>
    );
  }
}

export default App;
