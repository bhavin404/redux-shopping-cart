import Home from '../components/Home'
import { Connect } from 'react-redux'
import { addToCart } from '../service/actions/action'

const mapStateToProps =state=>({

})

const mapDispatchToProps = dispatch =>({
    addToCartHandler : data =>dispatch(addToCart)
})

export default Connect(mapStateToProps,mapDispatchToProps)(Home)


// export default Home