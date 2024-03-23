import "./styles/personal.css";

export const PersonalData = (obj) => {
  let objFormate = obj.userData;

  const nameStyle = {
    color: 'blue',
    fontWeight:'500'
  };

  return (
    <>
    <div class="left">
      <div className='personal'>
        <h3>Personal information</h3>
        <div className="nameinfo">
            <p>UserName:{objFormate.username}</p>
          <span>First Name:{objFormate.firstName}</span>
          <span>Middle Name: {objFormate.maidenName}</span>
          <span>Last Name: {objFormate.lastName}</span>
        </div>
        <div className="basic">
            <p>DOB:{objFormate.birthDate}</p>
            <p>Age:{objFormate.age}</p>
            <p>Gender:{objFormate.gender}</p>
            <p>Email:{objFormate.email}</p>
            <p>Phone Number:{objFormate.phone}</p>
        </div>
        </div>
        <div class="pic"><img src={objFormate.image} alt='pic' /></div>
        </div>
        
        
    </>
  );
};

/**
 *  "firstName": "Terry",
    "lastName": "Medhurst",
    "maidenName": "Smitham",
    "age": 50,
    "gender": "male",
    "email": "atuny0@sohu.com",
    "phone": "+63 791 675 8914",
    "username": "atuny0",
    "password": "9uQFF1Lh",
    "birthDate": "2000-12-25",
    "image": "https://robohash.org/Terry.png?set=set4",
 */