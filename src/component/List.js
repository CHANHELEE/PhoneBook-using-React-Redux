import {React} from 'react'
import { useDispatch } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const List = ({member}) => {
  const dispatch = useDispatch();
  const deleteMember = () =>{
    dispatch({type:"DELETE" ,payload:{id:member.id}})
  }
  return (
    <div>
      <Row className="list-each">
        <Col lg={2}>
          <FontAwesomeIcon icon={faUser} className="logo"/>
        </Col>

        <Col lg={8}>
          <div >{member.name}</div>
          <div >{member.num}</div>
          
        </Col>

        <Col lg={2}>
          <Button onClick={deleteMember}>삭제</Button>
        </Col>
      </Row>
    </div>
  )
}

export default List