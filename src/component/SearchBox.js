import React from 'react'
import { Row,Col,Form,Button } from 'react-bootstrap'

const SearchBox = () => {
  return (
    <div>

      <Row>
        <Col lg={10}>
          <Form.Control type="text" placeholder="이름을 입력해 주세요" />
        </Col>

        <Col lg={2}>
          <Button variant="primary" type="submit">검색</Button>
        </Col>
      </Row>

    </div>
  )
}

export default SearchBox