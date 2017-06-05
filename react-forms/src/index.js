import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyForm extends Component {
    state={
        content: {name: '', email: ''},
        validation: {
          formInvalid: true,
          nameValid: false,
          emailValid: false
        },
        formSubmitted: false,
        touched: {name: false, email: false}
    }



  handleChange = (event)=>{
    const {name, value} = event.target
    let {formInvalid, nameValid, emailValid} = this.state.validation
    const newContent = {...this.state.content}

    //validate form name must be 8 characters
    switch (name) {
      case 'name':
        nameValid = (value.length >= 8) 
        break
      case 'email':
        emailValid = validateEmail(value)
        break
      default:
        nameValid=false
        emailValid=false
    }

    formInvalid = (nameValid === true && emailValid === true) ? false : true

    newContent[name] = value

    this.setState({
        content: newContent,
        validation: {formInvalid,
        nameValid,
        emailValid}
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.setState( {
      formSubmitted: true
    })
    console.log('You submitted', this.state.content)
  }

  handleBlur = (field)=>{
    const touched = {...this.state.touched}
    touched[field]= true
    this.setState( {
      touched
    }
    )
  }
  render() {
    let nameText = null
    let emailText = null
    if (this.state.validation.nameValid === false && this.state.touched.name===true)
        nameText=<span style={{color:"red"}}>Name must be at least 8 characters.</span>
    if (this.state.validation.emailValid === false && this.state.touched.email===true)
        emailText=<span style={{color:"red"}}>Email must be in format user@domain.tld</span>
        
    if (this.state.formSubmitted === true) {
      return ( <div><h1>Validated Form</h1><h1>Thanks!</h1></div>)
    }
    else 
    return (
      <div><h1>Validated Form</h1>
        <form onSubmit={this.handleSubmit}>
        <input type="text" 
                     name="name"
                     value={this.state.content.name}
                     onChange={this.handleChange}
                     onBlur={()=>this.handleBlur('name')}
                     placeholder="Name"/>
        {nameText}
        <br/>
        <input type="text" 
                      name="email"
                      value={this.state.content.email} 
                      onChange={this.handleChange}
                      onBlur={()=>this.handleBlur('email')}
                      placeholder="Email"/>
        {emailText}
        <br/>
        <input type="submit" 
               disabled={this.state.validation.formInvalid} />
      </form>
      </div>
    )
  }
}

ReactDOM.render(
  <MyForm />,
  document.getElementById('root')
);

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
