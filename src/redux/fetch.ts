import { useDispatch } from 'react-redux'

interface IFetchParams {
    url: string
    method?: string
    params: any
}

export default function(params: IFetchParams, cb?: () => void) {
    const dispatch = useDispatch()
    dispatch()
}
