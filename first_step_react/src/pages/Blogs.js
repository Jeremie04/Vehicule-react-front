const Blogs = ({value, children}) => {
    return (
        <>
            <h2>{value}</h2>
            <p>{children}</p>
        </>
    )
}
export default Blogs;