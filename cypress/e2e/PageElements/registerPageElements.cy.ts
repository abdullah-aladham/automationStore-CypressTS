class registerPageElements
{
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
errorMsg1:()=>cy.contains("div",)

}
_register(firstName:string, 
    lastName:string,
    email:string,
    telephone:string,
    fax:string,
    company:string,
    address1:string,
    address2:string,
    city:string,
    region_State:string,
    zipCode:string,
    country:string,
    loginname:string,
    password:string,
    passwordConfirm:string,
    subscribe:string,
    privacyPolicy:string
){
    this.elements.FirstName().type(firstName);
this.elements.LastName().type(lastName);
this.elements.Telephone().type(telephone);
this.elements.Email().type(email);
this.elements.Telephone().type(telephone);
this.elements.Fax().type(fax);
this.elements.Company().type(company);
this.elements.Address1().type(address1);
this.elements.Address2().type(address2);
this.elements.city().type(city);
this.elements.Region_State().type(region_State);
this.elements.ZIPCode().type(zipCode);
this.elements.Country().type(country);
this.elements.Loginname().type(loginname);
this.elements.Password().type(password);
this.elements.PasswordConfirm().type(passwordConfirm);
this.elements.Subscribe().type(subscribe);
this.elements.privacyPolicy().type(privacyPolicy);



}
Register_New_User(firstName:string, 
    lastName:string,
    email:string,
    telephone:string,
    fax:string,
    company:string,
    address1:string,
    address2:string,
    city:string,
    region_State:string,
    zipCode:string,
    country:string,
    loginname:string,
    password:string,
    passwordConfirm:string,
    subscribe:string,
    privacyPolicy:string){
    this._register(firstName,lastName,email,telephone,fax,company,address1,address2,city,region_State,zipCode,country,loginname,password,passwordConfirm,subscribe,privacyPolicy);
}
//   RegisterNewUser(){
// this._register(firstName,lastName,email,telephone,fax,company,address1,address2,city,region_State,zipCode,country,loginname,password,passwordConfirm,subscribe,privacyPolicy);

// }
}




export default registerPageElements;