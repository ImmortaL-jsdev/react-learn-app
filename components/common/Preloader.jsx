import s from './Preloader.module.css'

const Preloader = ({ isFetching }) => {
	return <>{isFetching ? <div className={s.spinner}></div> : null}</>
}
export default Preloader
