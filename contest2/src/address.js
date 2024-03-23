import './styles/address.css'
export const Address=(obj) =>{
    //  console.log(obj.userData)
    let objFormate=obj.userData.address

    return(<>
    <div class="add">
        <h3>Address Information</h3>
        <p>Address:{obj.userData.address.address}</p>
        <p>City:{obj.userData.address.city}</p>
        <p>Postal Code:{obj.userData.address.postalCode}</p>
        <p>State:{obj.userData.address.state}</p>
    </div>
    </>)
}