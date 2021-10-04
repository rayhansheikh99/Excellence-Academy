import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import mentor1 from '../../images/mentor1.PNG'
import mentor2 from '../../images/mentor2.PNG'
import mentor3 from '../../images/mentor3.PNG'
import './mentors.css'

const Mentors = () => {
    return (
        <div>
            <div className='mb-3'>
                <h1>Our Mentors</h1>
            </div>
            <div>
            <CardGroup className="g-5 pb-3 mt-2">
  <Card className='mentor-card'>
    <Card.Img className='mentor-img' variant="top" src={mentor1} />
    <Card.Body>
      <Card.Title>Jhankar Mahbub</Card.Title>
      <Card.Text>
        <p>Senior Educator</p>
        <p>BUET</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button className='btn-design'><small className="text-white px-4">See Details</small></Button>
    </Card.Footer>
  </Card>
  <Card className='mentor-card'>
    <Card.Img className='mentor-img' variant="top" src={mentor2} />
    <Card.Body>
      <Card.Title>HM Nayeem</Card.Title>
      <Card.Text>
      <p>Educator</p>
        <p>CUET</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button className='btn-design'><small className="text-white px-4">See Details</small></Button>
    </Card.Footer>
  </Card>
  <Card className='mentor-card'>
    <Card.Img className='mentor-img' variant="top" src={mentor3} />
    <Card.Body>
      <Card.Title>Sumit Saha</Card.Title>
      <Card.Text>
      <p>Junior Educator</p>
        <p>KUET</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button className='btn-design'><small className="text-white px-4">See Details</small></Button>
    </Card.Footer>
  </Card>
</CardGroup>
            </div>
        </div>
    );
};

export default Mentors;