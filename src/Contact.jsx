import React, { useState } from 'react';

const Contact = props => {

    const [data, setData] = useState(
        {
            fullName: '',
            phone: '',
            email: '',
            msg: ''
        }
    );

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullName}`)
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit} >

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" name="fullName" value={data.fullName} onChange={InputEvent} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Phone </label>
                                <input type="number" className="form-control" id="exampleInputEmail1" name="phone" value={data.phone} onChange={InputEvent} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={data.email} onChange={InputEvent} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} > </textarea>
                            </div>

                            <button type="submit" className="btn btn-outline-primary">Submit Form</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};


export default Contact;