import RegisterForm from './component/RegisterForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import PhoneList from './component/PhoneList';




/**
 * 1. 왼쪽에는 연락처 등록폼, 오른쪽에는 연락처 리스트와 search창이 있다.
 * 2.폼 입력후 , 'create'버튼을 누르면 오른쪽 연락처에 추가가 된다.(몇개의 연락처가 있는지 확인할 수 있다.)
 * 3. 이름 입력후 'search'버튼을 누르면 해당이름을 검색한다.
 * 4. 삭제 버튼을 누르면 삭제 된다.
 */
function App() {
  return (
    <div >
      <h1 className="title">PHONE BOOK</h1>
      <Container>
        <Row>
        <Col><RegisterForm/></Col>
        <Col><PhoneList/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
