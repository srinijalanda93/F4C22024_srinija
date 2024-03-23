import "./styles/header.css";

export const Header = (obj) => {
  //  console.log(obj.userData)
    let objFormate=obj.userData
  return (
    <>
      <div className='head'>
        <h2>Welcome to DashBoard <span>{objFormate.lastName}</span> </h2>
        <img src={objFormate.image} alt='image'/>
      </div>
    </>
  );
};

