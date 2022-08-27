import {React} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterForm = () => {
  const idValue = useSelector(state => state.list);
  const dispatch = useDispatch();
  let memberNum=idValue.length;

  const insert = (event) =>{
    event.preventDefault();
    memberNum++;
    dispatch({type:"INSERT",payload:{memberNum:memberNum,name:event.target.name.value,num:event.target.number.value}});
  }


 
  return (
    <div>
      <Form onSubmit={event=>insert(event)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" name="name" placeholder="이름을 입력해 주세요" required />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>연락처</Form.Label>
          <Form.Control type="number" name="number" placeholder="연락처를 입력해 주세요" required/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          등록
        </Button>
      </Form>
    
    </div>
  )
}

export default RegisterForm