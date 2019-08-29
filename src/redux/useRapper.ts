import { useSelector } from 'react-redux'

export default function useRapper(key) {
    return useSelector(state => state[key])
}
