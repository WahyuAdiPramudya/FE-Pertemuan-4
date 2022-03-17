function Hello(props) {
    return (
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {props.name} : {props.age} Tahun - {props.major}</p>
      </div>
    );
}

export default Hello;