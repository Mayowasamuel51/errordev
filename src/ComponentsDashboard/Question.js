// this is qustion  page  .. title 
import { useState } from "react";
import AppF from "../Firbase";
import { Form } from "react-router-dom";
import './css.css'
import axios from "axios";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 
function Question() {
    const notyf = new Notyf();
    const [input, setInput] = useState({
        title: '',
        question: '',
        tags: '',
    })
    const [selected, setSelected] = useState(null)

    const handleInputFile = (e) => {
        setSelected(e.target.files[0])
    }
    const handleInputChange = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
    }
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        const getemail = localStorage.getItem('email')
        const form = new FormData()
        form.append('developeremail',getemail)
        form.append('title', input.title)
        form.append('question', input.question);
        form.append('tags', input.tags)
        form.append('questionImage', selected)
        form.append('user_id',getemail)

        axios.post('http://localhost:8000/api/askquestions', form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
            }).then((res) => {
            if (res.data.status === 201) {
                notyf.success('public question added')
            } else if (res.status === 404) {
                notyf.error(res.data.dataMessage)
            }
        }).catch((err)=>alert(err.message))
    }

    return (
        <>
            <div className="containr " style={{ margin: 'auto', width: '70%' }}>
               
                <div className="container-fluid p-0">
                <h1 className="has-text-centered-desktop has-text-weight-bold is-size-2">Ask a public question </h1>
                    <div style={{ padding: '12px' }}>
                        <h2 className="has-text-weight-bold">Writing a good question</h2>
                        You’re ready to ask a programming-related question and this form will help guide you through the process.

                        Looking to ask a non-programming question? See the topics here to find a relevant site.

                        <h1 className="is-size-3">   Steps</h1>
                        <li>Summarize your problem in a one-line title.</li>
                        <li>Describe your problem in more detail.</li>
                        <li> Describe what you tried and what you expected to happen.</li>
                        <li>Add “tags” which help surface your question to members of the community.</li>
                        <li> Review your question and post it to the site.</li>
                    </div>
                </div>

                <form  onSubmit={formSubmit} method="POST">
                    <div className="field">
                        <label className="label ">Title</label>
                        <div className="control">
                            <input className="input" type="text" name="title" value={input.title} onChange={handleInputChange}  required placeholder="eg how to center  a div in react  " />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label ">Body</label>
                        <p>The body of your question contains your problem details and results</p>
                        <div className="control">
                            <textarea className="textarea" required name="question" value={input.question} onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label ">Tags</label>
                        <p>Add up to 7 tags to Describe what your question is about</p>
                        <div className="control">
                            <input className="input" name="tags" value={input.tags} onChange={handleInputChange} type="text" required placeholder="eg " />
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">Screenshot the Error</label>
                        <div className="control">
                            <div className="file is-boxed">
                                <label className="file-label">
                                    <input className="file-input" name="questionImage" onChange={handleInputFile} type="file" required />
                                    <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                        </span>
                                        <span className="file-label">
                                            Choose a file…
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="button is-info">Post</button>


                </form>
            </div>


        </>
    )
}
export default Question;