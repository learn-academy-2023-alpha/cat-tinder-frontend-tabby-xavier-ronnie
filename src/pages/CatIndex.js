import React from "react"
import { Card, CardBody, CardTitle,CardText,CardSubtitle,Button} from "reactstrap"

const CatIndex = ({ cats }) => {
  return (
    
    <main className="cat-index-cards">
      {cats?.map((cat, index) => {
        return (
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
    <Button>
     Meow your match ! 🐈
    </Button>
  </CardBody>
</Card>
        )
      })}
    </main>
  )
}

export default CatIndex