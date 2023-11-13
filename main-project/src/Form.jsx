import React from "react"

// for longer forms, create an object within useState

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: "", comments: ""}
    )
    
    console.log(formData.comments)
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    /**
     * Challenge: Add a textarea for "comments" to the form
     * Make sure to update state when it changes.
     */
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
        </form>
    )
}



// for shorter forms with few inputs 

// export default function Form() {
//     const [firstName, setFirstName] = React.useState("")
    
//     console.log(firstName)
    
//     function handleChange(event) {
//         setFirstName(event.target.value)
//     }
    
//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//             />
//         </form>
//     )
// }