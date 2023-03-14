function Welcome(props) {
    console.log(props);
    return (
        <h1>Hi, This is  {props.name}</h1>
    );
}
export default Welcome;