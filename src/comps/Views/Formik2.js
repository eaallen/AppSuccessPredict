import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'
import { withFirebase } from '../Firebase';
//this is a xommit test

function DatabaseForm(props) {
    return (
        <div className='text-left'>
            <AnalysisController func={props.func} /><br />
        </div>
    )
}
export default DatabaseForm


const AnalysisController = props => {
    return (
        <Formik

            func={props.func}
            initialValues={{
                track_name: '',
                size_bytes: '',
                price: '',
                description: '',
                total_rating_count: '',
                user_rating: '',
                genre:''
            }}

            validateOnChange={false}
            validateOnBlur={true}
            validate={values => {
                const errors = {}
                
                    if(values.track_name === ''){
                        errors.track_name = 'Please fill out input 1'
                    }
                    if(values.input2 === ''){
                        errors.name = 'Please fill out input 2'
                    }
                    if(values.input3 === ''){
                        errors.name = 'Please fill out input 3'
                    }
                    if(values.input4 === ''){
                        errors.name = 'Please fill out input 4'
                    }
                    if(values.input5 === ''){
                        errors.name = 'Please fill out input 5'
                    }
                    if(values.input6 === ''){
                        errors.name = 'Please fill out input 6'
                    }
                
                
                return errors
            }}
            onSubmit={async (values, actions) => {
            }}
        >
        {form => (
            <InputForm form={form} func={props.func}/>
        )}
        </Formik>
    )
}


const InputForm = props => (    
    <Form>
        <Input title="App Title" name="track_name" type="text" />
        <Input title="Size in Bytes" name="size_bytes" type="text" />
        <Input title="Price" name="price" type="text" />
        <Input title="Description" name="description" type="text" />
        <Input title="Amount of Ratings" name="total_rating_count" type="text" />
        <Input Input title="Average Rating" name="user_rating" type="dropdown" />
        <First Input title="Genre" name="genre" type="dropdown" />
        <bs.Button type='submit' variant="dark" onClick={e=>handleSubmit(e,props.func,props.form.values)}>Submit </bs.Button> <h3 className='text-center'>{props.func.db_resp}</h3>
    </Form>    
)

const handleSubmit = async(e,func,formData) =>{
    e.preventDefault()
    console.log(func)
    await func.addData(formData)
}

const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
           <bs.Form.Label >{props.title}</bs.Form.Label>
            <bs.Form.Control
                disabled={props.disabled}
                type={props.type}
                
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)
const Option = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
           <bs.Form.Label>{props.title}</bs.Form.Label>
            <bs.Form.Control
                disabled={props.disabled}
                type={props.type}
                placeholder={props.title}
                {...rProps.field}
                as='select'
            >
                <option value="TRUE">Yes</option>
                <option value="FALSE">No</option>
            </bs.Form.Control>
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)
const First = (props) =>(
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
           <bs.Form.Label>{props.title}</bs.Form.Label>
            <bs.Form.Control
                disabled={props.disabled}
                type={props.type}
                placeholder={props.title}
                {...rProps.field}
                as='select'
            >
                <option value="Games">Games</option>
                <option value="Education">Education</option>
                <option value="Reference">Reference</option>
                <option value="Social Networking">Social Networking</option>
                <option value="Business">Business</option>
                <option value="Food & Drink">Food & Drink</option>
                <option value="Sports">Sports</option>
                <option value="Catalogs">Catalogs</option>
                <option value="Weather">Weather</option>
                <option value="Music">Music</option>
                <option value="Book">Book</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Medical">Medical</option>
                <option value="Utilities">Utilities</option>
                <option value="Travel">Travel</option>
                <option value="Navigation">Navigation</option>
                <option value="Photo & Video">Photo & Video</option>
                <option value="Health & Fitness">Health & Fitness</option>
                <option value="Productivity">Productivity</option>
                <option value="News">News</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Shopping">Shopping</option>
            </bs.Form.Control>
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>

)

