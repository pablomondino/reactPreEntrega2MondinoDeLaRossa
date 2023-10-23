const Item = ({producto}) => {
    return(
        <div> 
            <p>{producto.title}</p>
            <p>{producto.price}</p>
        </div>
    )
}

export default Item