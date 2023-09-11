import {useContext} from 'react'
import { Context } from '../contexts/Context'

export const Home = ()=>{
    const {state, dispatch} = useContext(Context)
    const handleChange = ()=>{
        dispatch({
            type: "CHANGE_NAME",
            payload: {
                name: "Pedro"
            }
        })
    }
    return (
        <div>
            {state.user.name}
            <div onClick={handleChange}>Trocar o nome para pedro</div>
        </div>
    )
}