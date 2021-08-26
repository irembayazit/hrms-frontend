import { useField } from 'formik'
import React from 'react'
import { FormField, Input, Label } from 'semantic-ui-react'

export default function HrmsTextInput({...props}) {
    //console.log(props)
    const [field,meta] = useField(props)
    //console.log(field)
    //console.log(meta)
    
    return (
        
        <FormField control={Input} label={props.placeholder} error={meta.touched && !!meta.error}>            
            <input {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ):null}
        </FormField>
    )
}
 