import axios from 'axios';

const URL = 'http://67.205.161.202/jumpparkapi/public/api/1/sessions'

export function exportSessions(){
    console.log("Exportando as sessões do usuário")
    return {
        type: 'EXPORT_SESSION'
    }
}

export function endSession(){
    console.log("Fim da sessão do usuário")
    return {
        type: 'END_SESSION'
    }
}

export function search(text){
    console.log("Pesquisando: ",text)
    return {
        type: 'SEARCH',
        payload: text
    }
}

export function changeSRC(e){
    console.log("changed:",e.target.value)
    return {
        type: 'CHANGE_SRC',
        payload: e.target.value
    }
}


export const addGetData = (data) =>{
    return {
    type: 'GET_DATA',
    payload: data
  }
};

export const getData = () => {
    return dispatch => {
                axios.get(URL).then(
                resp=>{dispatch(addGetData(resp.data)
                )}
            )

    }

}