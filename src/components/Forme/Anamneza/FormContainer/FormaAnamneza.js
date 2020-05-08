import React, { useState } from 'react'
import { useFormik } from 'formik';
import {
    Row,
    Col,
    Form,
    Button,
    FormInput 
  } from "shards-react";
import FormToData from './FormToData'

const FormaAnamneza = () => {
    const [Count, setCount] = useState(false); /* false - ni bil klikan submit, true-submit je bil klikan */
    const [data, setData] = useState({});

    const formik = useFormik({
      initialValues: {
        ime: '',
        priimek: '',
        mobilnost: '',
      },
      onSubmit : (values, actions) => { /* onsubmit se podatki prepišejo v data in count se prepiše v true da se lahko kliče FormToData component in generira pdf */
            setData(values)
            setCount(true)
            actions.setSubmitting(false);
      },
    });

    function callback(){
        /* funkcija se kliče iz child component (FormToData) in ponazori, da je po submitu se klical child component*/
        setCount(false)
    }

    return (
        <div>
            <Row>
                <Col>
                    <Form onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col>
                                <label htmlFor="ime">Ime:</label>
                                    <FormInput
                                        id="ime"
                                        name="ime"
                                        type="ime"
                                        onChange={formik.handleChange}
                                        value={formik.values.ime}
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="priimek">Priimek:</label>
                                    <FormInput
                                        id="priimek"
                                        name="priimek"
                                        type="priimek"
                                        onChange={formik.handleChange}
                                        value={formik.values.priimek}
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="mobilnost">Mobilnost:</label>
                                        <FormInput
                                            id="mobilnost"
                                            name="mobilnost"
                                            type="mobilnost"
                                            onChange={formik.handleChange}
                                            value={formik.values.mobilnost}
                                        />
                            </Col>
                        </Row>
                        <Row className="mt-3"><Button type="submit">Potrdi in naredi PDF</Button></Row>
                        <Row className="mt-3 mb-2">{Count ? <div><FormToData data={data} callback={callback}/></div> : null}</Row>
                        {console.log('Count1:',Count)}
                    </Form>                    
                </Col>
            </Row>
        </div>
    )
}

export default FormaAnamneza;
