import React from 'react'
import { Row,Col,Form,Button } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'

const SearchBox = () => {
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();

  const find = (event) => {
    event.preventDefault();
    let memberLocation= []
    list.forEach((member,index) => 
    {
      if(member.name==event.target.name.value){
        memberLocation.push(index);
      }
    }
    );

    dispatch({type:"FIND", payload:{index:memberLocation}})
  }

  return (
    <div>
      <Form onSubmit={(event)=>find(event)}>
      <Row>
        <Col lg={10}>
          <Form.Control type="text" placeholder="이름을 입력해 주세요" name="name" />
        </Col>

        <Col lg={2}>
          <Button variant="primary" type="submit">검색</Button>
        </Col>
      </Row>
      </Form>
    </div>
  )
}

export default SearchBox