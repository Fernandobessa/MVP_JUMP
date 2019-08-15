import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {changeSRC, getData,search,endSession,exportSessions} from '../UserSessions/UserSessionsActions'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { StyledHTd, StyledBTd, StyledBTNTop, StyledInputBase, StyledBTNSRC, StyledBtnEnd} from './MaterialStyle'
import Box from '@material-ui/core/Box';
import { FaCaretDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"
import dateFormat from 'dateformat';



class UserSessions extends Component {
    UNSAFE_componentWillMount() {
        this.props.getData()
    }

    render() {
        return (
            this.props.list ?
                <Container maxWidth="md">
                    {console.log(this.props)}
                    <Box width="auto" height="40px" bgcolor="#FFF" p={1} my={0.5}>
                        <StyledBTNTop onClick={this.props.exportSessions}>Exportar <FaCaretDown /></StyledBTNTop>
                        <StyledInputBase onChange={this.props.changeSRC} inputProps={{style:{padding:10 }}}variant="outlined" placeholder="pesquisar"></StyledInputBase>
                        <StyledBTNSRC onClick={()=>this.props.search(this.props.value)}><FaSearch size={25} /></StyledBTNSRC>
                    </Box>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledHTd>Operador</StyledHTd>
                                    <StyledHTd>Abertura de sessão</StyledHTd>
                                    <StyledHTd>Fechamento de sessão</StyledHTd>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.list.data.content.map((item) =>
                                    <TableRow key={item.sessionId}>
                                        <StyledBTd >{item.userName}</StyledBTd>
                                        <StyledBTd >{dateFormat(item.startDateTime, "dd/mm/yyyy (hh'h'mm)")}</StyledBTd>
                                        {item.endDateTime === '0001-01-01 00:00:00' ? 
                                        <StyledBTd onClick={this.props.endSession} ><StyledBtnEnd>Encerrar sessão</StyledBtnEnd></StyledBTd>: 
                                        <StyledBTd >{dateFormat(item.endDateTime, "dd/mm/yyyy (hh'h'mm)")}</StyledBTd>
                                        }
                                    </TableRow>

                                )}
                            </TableBody>
                        </Table>
                    </Paper>
                </Container>
                : null

        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.usersessions.list,
        value: state.srctext.value

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getData,changeSRC,search,endSession,exportSessions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSessions)