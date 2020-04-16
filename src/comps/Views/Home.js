import React from 'react';
import {Row, Col,Container} from 'react-bootstrap';
import { withFirebase } from '../Firebase';

function HomeBase(props) {
    let user = props.context.user()
    return (
        <div className="text-light bg-dark">

            <div className='text-center jumbotron' style={{backgroundColor:'smokewhite',backgroundImage:'url("/logo512.png")',paddingTop:'15.9rem',paddingBottom:'15.9rem'}}>
                <h1 className="text-light">
                    {user?
                    <>
                       Welcome, {user.email}
                    </>
                    :
                    <>
                        Analytics that Save Lives.
                    </>}

                </h1>
                

            </div>
            <div className='text-center'>
                <h1>Founders</h1>
            </div>
            <Row  className='text-center' noGutters>
                
                <Col>
                    <img className='rounded-circle' src='https://media-exp1.licdn.com/dms/image/C4E03AQHqLO0sxiIZig/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=cG2oarCyVmFRH5dMK7gUyXkp1Hcmr32YxQvhw-LwYis' alt=''/>
                    
                    
                    <h1>
                        Elijah Allen                       
                    </h1>
                    
                </Col>
                <Col>
                    <img className='rounded-circle' src='https://media-exp1.licdn.com/dms/image/C4E03AQHngYkrgupNkw/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=xN-S4PGKD1k5QEN75cm7V5nA3fDniFLEYbctUJ_gEj8'/>
                    <h1>
                        Matthew Brown
                    </h1>
                    
                </Col>
                <Col>
                    <img className='rounded-circle' src='https://media-exp1.licdn.com/dms/image/C4E03AQElDmqS5ExxnA/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=4_tbFqcDMnT6QkNsV85gqHUCs6bKzHm0J7Bwn7jLVG0'/>
                    <h1>
                      Micheal Chadwick
                    </h1>
                    
                </Col>
                <Col>
                    <img className='rounded-circle' src='https://media-exp1.licdn.com/dms/image/C5603AQEuw8mkXneMww/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=fuRtXQr_CiR-2ElalSDZnHdP2ayXzwZjzGDxTYzd_VQ'/>
                    <h1>
                        Connor Merkley
                    </h1>
                </Col>
            </Row>    
   
        </div>
  );
}
const Home = withFirebase(HomeBase)
export default Home;
