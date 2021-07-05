import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            Hindi: false,
            English: false,
            gender: "Male",
            country:"India"
        }
        this.selectcountry=this.selectcountry.bind(this)
        this.checkgenderchange=this.checkgenderchange.bind(this)
        this.checkchange=this.checkchange.bind(this)
    }
    handleuserchange = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }
    handlecommentchange = (event) => {
        this.setState(
            {
                comments: event.target.value
            }
        )
    }
    checkchange=(event)=>
    {
        this.setState(
            {
               [event.target.name]: event.target.checked
            }
        )
    }
    checkgenderchange=(event)=>
    {
        this.setState(
            {
               [event.target.name]: event.target.value
            }
        )
    }
    selectcountry=(event)=>
    {
        this.setState(
            {
               country: event.target.value
            }
        )
        console.log(event.target.value)
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={this.state.username} onChange={this.handleuserchange} />
                    </div>
                    <div>
                        <label htmlFor="Comments">Comments</label>
                        <textarea id="Comments" value={this.state.comments} onChange={this.handlecommentchange}></textarea>
                    </div>
                    <div>
                        <label htmlFor="Languages">Select Languages</label>
                        <br/>
                        <input type="checkbox" name="Hindi" checked={this.state.Hindi} onChange={this.checkchange}/>Hindi<br/>
                        <input type="checkbox" name="English" checked={this.state.English} onChange={this.checkchange}/>English<br/>
                    </div>
                    <div>
                        <label htmlFor="Gender">Gender: </label>
                        <br/>
                        <input type="radio" name="gender" value="Male" checked={this.state.gender==="Male"} onChange={this.checkgenderchange}/>Male<br/>
                        <input type="radio" name="gender" value="Female" checked={this.state.gender==="Female"} onChange={this.checkgenderchange}/>Female<br/>
                    </div>
                    <div>
                        <label htmlFor="Country">Select your Country: </label>
                        <br/>
                        <select value={this.state.country} onChange={this.selectcountry}>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}
export default Forms