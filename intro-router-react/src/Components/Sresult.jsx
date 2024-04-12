 function Sresult (props) {
    const imgsrc=`https://source.unsplash.com/600×900/?${props.name}`
    return (
      <>
        <img src={imgsrc} alt="not found" />
      </>
    );
  };
export default Sresult