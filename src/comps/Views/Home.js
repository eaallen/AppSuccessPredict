import React from 'react';
import {Row, Col,Container,Button} from 'react-bootstrap';
import { withFirebase } from '../Firebase';
import PredictForm from './Formik'
import DatabaseForm from './Formik2'
function HomeBase(props) {
    return (
        <div className="text-light bg-dark">
            <div className='header'>
                <Row>
                    <Col >
                    <a href="#landing"><h4>App Predict</h4></a>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col className='text-right'>
                    </Col>
                    <Col className='text-right'>
                        <a href="#calc"><h5 className='head-item'>Calculator</h5></a>
                    </Col>
                    <Col className='text-right'>
                        <a href="#founders"><h5 className='head-item'>Founders</h5></a>
                    </Col>
                    <Col className='text-right'>
                        <a href="#data"><h5 className='head-item'>Add Data</h5></a>
                    </Col>
                </Row>
            </div>
            <div id='landing' className='text-center bg-light ' style={{backgroundColor:'smokewhite',}}>
                <Row>
                    <Col className='text-dark paddingLR'>                        
                        <h1  className='paddingLR'>Make the best App</h1>
                        <img src='/logo512.png'/>
                    </Col>
                    <Col>
                    </Col>
                </Row>

            </div>
            <div id='calc'>   
            <h1  className='paddingLR text-center'>
                Know your success before you deploy
            </h1>
            <br/>
            <h3 className='text-center'>
                Predict the number of downloads
            </h3> 
            <br/>
                <Row noGutters>
                    <Col>
                        
                    </Col>
                    <Col>
                        <PredictForm func={props.context}/>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
                
            </div>
            <span id='founders'></span>
            <br/>
            <br/>
            
            <div  className='text-center text-dark bg-light'>
                <br></br>
                <h1 >Founders</h1>
            
            <Row  className='text-center' noGutters>
                
                <Col >
                    <img className='rounded-circle' src='https://media-exp1.licdn.com/dms/image/C4E03AQHqLO0sxiIZig/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=cG2oarCyVmFRH5dMK7gUyXkp1Hcmr32YxQvhw-LwYis' alt=''/>         
                    <h1>
                        Elijah Allen                       
                    </h1>  
                    <p className='text-left' style={{paddingRight:'2rem',paddingLeft:'2rem'}}>
                        Student at Brigham Young University majoring in Information Systems. Skilled in React JS, SQL, HTML, JavaScript, ASP.NET, C# and new resource implementation. 
                        Strong in community services with an associate degree focused in Science from Utah Valley University. 
                    </p>                  
                </Col>
                <Col>
                    <img className='rounded-circle' src='https://media-exp1.licdn.com/dms/image/C4E03AQHngYkrgupNkw/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=xN-S4PGKD1k5QEN75cm7V5nA3fDniFLEYbctUJ_gEj8'/>
                    <h1>
                        Matthew Brown
                    </h1>                    
                    <p className='text-left' style={{paddingRight:'2rem',paddingLeft:'2rem'}}>
                        A junior in the information systems program at BYU with a particular interest and aptitude towards data science (Python, Tableau) and ML.

                        Skills include: Javascript, React.js, VBA, SQL, Python (Pandas, Sci-kit-learn, Seaborn), React.js, ASP.NET 
                    </p>                  
                </Col>
                <Col>
                    <img className='rounded-circle' src='https://media-exp1.licdn.com/dms/image/C4E03AQElDmqS5ExxnA/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=4_tbFqcDMnT6QkNsV85gqHUCs6bKzHm0J7Bwn7jLVG0'/>
                    <h1>
                      Michael Chadwick
                    </h1>                    
                    <p className='text-left' style={{paddingRight:'2rem',paddingLeft:'2rem'}}>
                        I am a business student at Brigham Young University studying Information Systems. I was recently a Quality Assurance Engineer intern at a start up software company, 
                        where I was responsible for the quality of the company's web application. 
                    </p>                  
                </Col>
                <Col>
                    <img className='rounded-circle' src='https://media-exp1.licdn.com/dms/image/C5603AQEuw8mkXneMww/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=fuRtXQr_CiR-2ElalSDZnHdP2ayXzwZjzGDxTYzd_VQ'/>
                    <h1>
                        Connor Merkley
                    </h1>
                    <p className='text-left' style={{paddingRight:'2rem',paddingLeft:'2rem'}}>
                        Fluent in latin: consectetur adipiscing elit. Integer commodo pellentesque ante, nec tincidunt 
                        diam lobortis nec. Nulla suscipit ornare placerat. Praesent cursus turpis feugiat metus vehicula
                    </p>                  
                </Col>
            </Row> 
            </div>   
            <br/>
            <div className='text-light'>
                <h1 id='data' className='text-center'>
                    Add data to our database
                </h1>
                <Row noGutters className='text-center'>
                <Col></Col>
                <Col>
                    <DatabaseForm func={props.context}/>
                </Col>
                <Col></Col>
                </Row>
            </div>
        </div>
  );
}
const Home = withFirebase(HomeBase)
export default Home;
