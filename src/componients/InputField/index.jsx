import TextField from "@mui/material/TextField";
import {styled }  from '@mui/material'

const StyledInput = styled(TextField)({
    marginBottom:'1em',
})

const Input = ({label , ...rest}) => {
    return <StyledInput label={label} {...rest}  />
}

export default Input;