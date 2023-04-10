import { render } from '@testing-library/react'
import React from 'react'
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Button } from "reactstrap"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  let cat = cats?.find(cat => cat.id === +id)

  return (
    <div className='cat-show-align'>
      {cat && (
        <Card
          color="danger"
          outline
          style={{
            width: '18rem'
          }}
        >
          <img alt={`profile of a cat named ${cat.name}`} src={cat.image} />
          <CardBody>
            <CardTitle tag="h5">
              Name: {cat.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Age: {cat.age}
            </CardSubtitle>
            <CardText>
              Enjoys: {cat.enjoys}
            </CardText>
          </CardBody>
        </Card>
      )}
    </div>
  )
}

export default CatShow
