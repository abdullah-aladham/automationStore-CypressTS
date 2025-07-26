import User from '../shared_entites/user'
class registerPageElements
{
  private static test_user:User =new User();

elements    = {
    FirstName : ()=>cy.get("#AccountFrm_firstname"),
    LastName : ()=>cy.get('input[name="lastname"]'),
    Email: ()=>cy.get('input[name="email"]'),
    Telephone: ()=>cy.get('input[name="telephone"]'),
    Fax: ()=>cy.get('input[name="fax"]'),
    Company :()=> cy.get('input[name="company"]'),
    Address1: ()=>cy.get('input[name="address_1"]'),
    Address2:()=>cy.get('input[name="address_2"]'),
    city:()=>cy.get('input[name="city"]'),
    Region_State:()=>cy.get('select[name="zone_id"]'),
    ZIPCode:()=>cy.get('input[name="name="postcode"]'),
    Country:()=>cy.get('input[name="country_id"]'),
    Loginname:()=>cy.get('input[name="loginname"]'),
    Password:()=>cy.get('input[name="password"]'),
PasswordConfirm:()=>cy.get('input[name="confirm"]'),
 Subscribe:()=>cy.get('input[name=""'),//will be fixed later
privacyPolicy:()=>cy.get('input[name="agree"]'),
registerbtn:()=>cy.get('input').contains('title="Continue"'),
errorMsg1:()=>cy.contains("div",)

}
_Register(){
    this.elements.FirstName.type
}
public  Register_New_User= ()=>{
  this._Register();
//   cy.intercept("/",);

}

}




export default registerPageElements;