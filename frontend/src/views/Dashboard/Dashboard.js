import React, { Component } from 'react';
import {
  Button,
  Card,
  Form,
  FormGroup,
  Input,
  Label,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const POST_URL ="http://127.0.0.1:8080/backend/pedidos/guardar";

class Dashboard extends Component {
  constructor () {
    super();
    this.state = {
      nombre: '',
      monto: '',
      descuento: ''
    };
  }

  handleChange = (evt) => {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleReset = () => {
    this.setState({
          nombre: '',
          monto: '',
          descuento: ''
        });
  }

  handleSubmit = async(evt) => {
    evt.preventDefault();
    try{
      let response =  await fetch(POST_URL, {
        method: 'POST',

        headers:new Headers({
          'Accept': '*/*',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(this.state)
      });
      console.log()
      if(response.status===200){
        toast.success("Pedido creado 😊", {
          position: toast.POSITION.TOP_RIGHT
        });
        this.handleReset();
      }else{
        throw new Error(response.status);
      }

    }catch(e){
      toast.error("Algo salio mal 😱", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
 }

  render() {
    return (
      <div className="animated fadeIn">
      <ToastContainer />
        <Row>
          <Col xs="12" sm="6" lg="6">
            <Form onSubmit={this.handleSubmit}>
              <Card>
                <CardHeader>
                  <strong>Normal</strong> Form
                </CardHeader>
                <CardBody>
                    <FormGroup>
                      <Label htmlFor="nf-nombre">Nombre*</Label>
                      <Input type="text" required="required" name="nombre"  maxLength="100" placeholder="Nombre.."
                      onChange={this.handleChange}
                      value={this.state.nombre} />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="nf-monto">Monto*</Label>
                      <Input type="number" required="required" name="monto" placeholder="Monto.."
                      onChange={this.handleChange}
                      value={this.state.monto} />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="nf-descuento">Descuento</Label>
                      <Input type="number" placeholder="Descuento.." name="descuento"
                      onChange={this.handleChange}
                      value={this.state.descuento} />
                    </FormGroup>
                  <i>*Campos obligatorios</i>
                </CardBody>
                <CardFooter>
                  <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Guardar</Button>{' '}
                  <Button type="reset" onClick={this.handleReset} size="sm" color="danger"><i className="fa fa-ban"></i> Borrar</Button>
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
