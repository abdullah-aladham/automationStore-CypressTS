import User from '../shared_entites/user'
import { BASE_URL } from "../helper/constants";

class registerPageElements
{
    test_user:User =new User();

elements    = {
    FirstName : ()=>cy.get("#AccountFrm_firstname"),
    LastName : ()=>cy.get('input[name="lastname"]'),
    Email: ()=>cy.get('input[name="email"]'),
    Telephone: ()=>cy.get('input[name="telephone"]'),
    Fax: ()=>cy.get('input[name="fax"]'),
    Company :()=> cy.get('input[name="company"]'),
    Address1: ()=>cy.get('input[name="address_1"]'),
    Address2:()=>cy.get('input[name="address_2"]'),
    City:()=>cy.get('input[name="city"]'),
    Region_State:()=>cy.get('select[name="zone_id"]'),
    ZIPCode:()=>cy.get('input[name="name="postcode"]'),
    Country:()=>cy.get('input[name="country_id"]'),
    Loginname:()=>cy.get('input[name="loginname"]'),
    Password:()=>cy.get('input[name="password"]'),
PasswordConfirm:()=>cy.get('input[name="confirm"]'),
 Subscribe:()=>cy.get('input[type="radio"]'),//fixed but needs to be refactored more since there is two radio buttons
privacyPolicy:()=>cy.get('input[name="agree"]'),
registerbtn:()=>cy.get('input').contains('title="Continue"'),
errorMsg1:()=>cy.contains("div",'class="alert alert-error alert-danger"'),
inputerrmsg:()=>cy.contains("span",'class="help-block"')//i think that it need to be refactored since all input errors have same class and html element
}

_Register(){
this.elements.FirstName().should('be.visible').and('not.be.disabled').type(this.test_user.get_fname());
this.elements.LastName().should('be.visible').and('not.be.disabled').type(this.test_user.get_lname());
this.elements.Email().should('be.visible').and('not.be.disabled').type(this.test_user.get_Email());
this.elements.Address1().should('be.visible').and('not.be.disabled').type(this.test_user.get_Address_1());
this.elements.City().type(this.test_user.get_City());
this.elements.Region_State().find('option').its('length').then((optionsLength)=>{
const randomindex=Math.floor(Math.random()*optionsLength);
cy.get('select[name="zone_id"]').select(randomindex);
});
 this.elements.ZIPCode().type(this.test_user.get_zip_code());
 this.elements.Country().find('option').its('length').then((optionsLength)=>{
const randomindex=Math.floor(Math.random()*optionsLength);
cy.get('input[name="country_id"]').select(randomindex);
});
this.elements.Loginname() .should('be.visible').and('not.be.disabled')  .type(this.test_user.get_LoginName());
this.elements.Password()  .should('be.visible').and('not.be.disabled')  .type(this.test_user.get_Password());
this.elements.PasswordConfirm() .should('be.visible').and('not.be.disabled')  .type(this.test_user.get_ConfirmPassword());
this.elements.privacyPolicy()   .should('be.visible').and('not.be.disabled').check();
}
public  Register_New_User= ()=>{
  this._Register();
  cy.intercept("POST",BASE_URL+"index.php?rt=account/create",{statusCode:302}).as("AccountCreationReq");
  cy.wait("@AccountCreationReq").then((interception)=>{
    expect(interception.request.method).to.eq("POST");
    expect(interception.response.statusCode).to.eq(302);
  })
  cy.intercept('GET',BASE_URL+'/index.php?rt=account/success').as("CreationSuccessResp");
  cy.wait("@CreationSuccessResp").then((interception)=>{
     expect(interception.request.method).to.eq("GET");
    expect(interception.response.statusCode).to.eq(200);
  });
  cy.url().should('eq',BASE_URL+'/index.php?rt=account/success');

 


}


}

export default registerPageElements;