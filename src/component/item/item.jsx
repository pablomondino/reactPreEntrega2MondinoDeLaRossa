const Item = ({producto}) => {
    return(
        //<img src={producto.image} alt="" />
        <div> 
            <p>{producto.title}</p>
            <p>{producto.description}</p>
            <p>{producto.price}</p>
          
          <img src={producto.image} alt="" style={{ width: '200px', height: 'auto' }} />
        </div>
    )
}

export default Item