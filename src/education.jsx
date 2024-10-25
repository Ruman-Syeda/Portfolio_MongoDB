/*import '../src/index.css'
import '../src/education.css'
import academic from '../src/assets/academic.jfif';
export default function Education() {
     return (
     <>
   
    <h2 className="worksTitle">Academic Qualification</h2>
    <div>
    <img src={academic} alt="acada1" className="worksImg"  width="1500px" height="80px"/><br/><br/>
    </div>

    <form id="ppy">

                    <label htmlFor="myTitle"> *Title: </label>
				<input type="text" id="myTitle" name="myTitle" required="required" autoFocus /> <br /> <br />
				
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
                    <label htmlFor="myDate"> *Completion Date: </label>
				<input type="date" id="myDate" name="myDate" required="required" /> <br /> <br />
				
                    <label htmlFor="myDescription"> *Description: </label>
				<input type="text" id="myDescription" name="myDescription" required="required" /> <br /> <br />

				<input type="submit" className="submit" value="Submit" /> <br />
					
		
		</form> 
         <br/>
     </>
     );
     }
    */

     import React, { useState } from "react";
    import { useForm } from "react-hook-form";
    import {create} from '../qualification/api-qualification.js'
    import academic from '../src/assets/academic.jfif';
    import '../src/education.css'
    export default function Qualification() {
      
      const [values, setValues] = useState({
          title:"",
        firstname: "",
        lastname: "",
        email: "",
        completion:"",
        description:""
        //error: "",
        //redirectToReferrer: false,
      });
    
      // Destructuring methods from react-hook-form
      const { register, handleSubmit, formState: { errors } } = useForm();
    
      // Submission function for the form
      const submitForm = () => {
        // Logging form values on submit
        const qualification = {
          title: values.title || undefined,
          firstname: values.firstname || undefined,
          lastname: values.lastname || undefined,
          email: values.email || undefined,
          completion: values.completion || undefined,
          description: values.completion || undefined,
          //error: values.error || undefined,
          //redirectToReferrer: values.redirectToReferrer || undefined,
        };
    
        console.log(qualification);
        create(qualification);
    
        // Optionally, set the values state here if you need to update it
        
      };
      
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
      }
      return (
        <>
        <h2 className="worksTitle">Academic Qualification</h2>
        <div>
          <img src={academic} alt="Academic Qualification" className="worksImg" width={1500} height={80} />
          <br /><br />
        </div>
        <form onSubmit={handleSubmit(submitForm)}>

          {/* Title */}
          <label htmlFor="title">Title:</label>
          <input
            {...register("title", { required: "title name is required" })}
            value={values.title} onChange={handleChange('title')}
          />
          {errors.title && <p>{errors.title.message}</p>}
          <br /><br />
    
          {/* First Name */}
          <label htmlFor="firstname">First Name:</label>
          <input
            {...register("firstname", { required: "First name is required" })}
            value={values.firstname} onChange={handleChange('firstname')}
          />
          {errors.firstname && <p>{errors.firstname.message}</p>}
          <br /><br />
    
          {/* Last Name */}
          <label htmlFor="lastname">Last Name:</label>
          <input
            {...register("lastname", { required: "Last name is required" })}
            value={values.lastname} onChange={handleChange('lastname')}
          />
          {errors.lastname && <p>{errors.lastname.message}</p>}
          <br /><br />
    
          {/* Email */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" } )}
            value={values.email} onChange={handleChange('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <br /><br />
    
    {/* Completion Date */}
    <label htmlFor="completion">Completion Date:</label>
          <input
            {...register("completion", { required: "Completion Date is required" })}
            value={values.completion} onChange={handleChange('completion')}
          />
          {errors.completion && <p>{errors.completion.message}</p>}
          <br /><br />
    
    {/* Description */}
    <label htmlFor="description">Description:</label>
          <input
            {...register("description", { required: "Description is required" })}
            value={values.description} onChange={handleChange('description')}
          />
          {errors.description && <p>{errors.description.message}</p>}
          <br /><br />
    
          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
        </>
      );
    }
    