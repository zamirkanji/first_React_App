const CreateBox = (props) => {

    const onClickBox = () => {
        console.log('test click');
    }

    return (
        <div className="box" onClick={onClickBox}>
            <p>{props.name}</p>            
        </div>
    )
}


export default CreateBox