import { withStyles } from '@material-ui/styles';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const StyledHTd = withStyles({
    root: {
        background: '#1E5168',
        textAlign: 'center',
        color: '#FFFF'

    },
})(TableCell);

export const StyledBTd = withStyles({
    root: {
        textAlign: 'center',
    },
})(TableCell);

export const StyledBTNTop = withStyles({
    root: {
        background:'#52BC76',
        color: '#FFFF',
        fontSize: 12,
        textAlign: 'center',
        
    },
})(Button);


export const StyledInputBase = withStyles({
    root: {
        textAlign: 'center',
        marginLeft: "55%",
        width: '200px',
        bordercolor: '#1E5168',
        borderWidth: 2,
        margin: 0

    },
})(TextField);

  export const StyledBTNSRC = withStyles({
    root: {
        color: '#1E5168',
        fontSize: 12,
        textAlign: 'center',
        borderColor: '#1E5168   ',
        borderWidth: 2,
    },
})(Button);

export const StyledBtnEnd = withStyles({
    root: {
        background:'#1E5168',
        color: '#FFFF',
        fontSize: 10,
        textAlign: 'center',
        
    },
})(Button);

