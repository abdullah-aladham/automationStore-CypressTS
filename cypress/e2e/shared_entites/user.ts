// import 
class User {

     FirstName:string;
     LastName:string;
     Email:string;
       Telephone:string;
      Fax:string;
      Company:string;
      Address_1:string;
      Address2:string;
      City:string;
      Region_State:any;
      ZIPCode:string;
      Country:any;
      LoginName:string;
      Password:string;
     PasswordConfirm:string;
     Subscribe:any;//will be fixed later
     PrivacyPolicy:any ;

//   constructor(
//      fname:string,
//      lname:string,
//      email:string,
//      address_1:string,
//      city:string,
//      region_State:any,
//      zipCode:string,
//      country:any,
//      loginName:string,
//      password:string,
//      passwordConfirm:string,
//      privacyPolicy:any)
//  {
//      this.FirstName=fname;
//      this.LastName=lname;
//      this.Email=email;
//      this.Address_1=address_1;
//      this.City=city;
//      this.Region_State=region_State;
//      this.ZIPCode=zipCode;
//      this.Country=country;
//      this.LoginName=loginName;
//      this.Password=password;
//      this.PasswordConfirm=passwordConfirm;
//      this.PrivacyPolicy=privacyPolicy;

//  };

//Getters And Setters
   public get_fname  =  ()=>{
        return this.FirstName;
    }
    public set_fname = (firstName:string)=>{
        this.FirstName = firstName;
    }

    public get_lname  =  ()=>{
        return this.LastName;
    }
    public set_lname = (lastname:string)=>{
        this.LastName=lastname;
    }

public get_Email =  ()=>{
        return this.LastName;
    }
    public set_Email = (email:string)=>{
        this.Email=email;
    }
    public get_Telephone  =  ()=>{
        return this.LastName;
    }
    public set_Telephone = (telephone:string)=>{
        this.Telephone=telephone;
    }
    public get_Fax  =  ()=>{
        return this.LastName;
    }
    public set_Fax = (fax:string)=>{
        this.Fax=fax;
    }
    public get_Company  =  ()=>{
        return this.Company;
    }
    public set_Company = (Company:string)=>{
        this.Company=Company;
    }
    public get_Address_1  =  ()=>{
        return this.Address_1;
    }
    public set_Address_1 = (address_1:string)=>{
        this.Address_1=address_1;
    }
    public get_Address2  =  ()=>{
        return this.Address2;
    }
    public set_Address2 = (address_2:string)=>{
        this.Address2=address_2;
    }
    public get_City  =  ()=>{
        return this.City;
    }
    public set_City = (city:string)=>{
        this.City=city;
    }
    public get_region_state =  ()=>{
        return this.Region_State;
    }
    public set_region_state = (region_state:string)=>{
        this.Region_State=region_state;
    }
    public get_zip_code =  ()=>{
        return this.ZIPCode;
    }
    public set_zip_code = (zipCode:string)=>{
        this.ZIPCode=zipCode;
    }
    public get_Country  =  ()=>{
        return this.Country;
    }
    public set_Country = (country:string)=>{
        this.Country=country;
    }
    public get_LoginName  =  ()=>{
        return this.LoginName;
    }
    public set_LoginName = (loginName:string)=>{
        this.LoginName=loginName;
    }
    public get_Password  =  ()=>{
        return this.Password;
    }
    public set_Password = (password:string)=>{
        this.Password=password;
    }
    public get_ConfirmPassword  =  ()=>{
        return this.PasswordConfirm;
    }
    public set_ConfirmPassword = (confirmPassword:string)=>{
        this.PasswordConfirm=confirmPassword;
    }
     public get_Subscribe =  ()=>{
        return this.Subscribe;
    }
    public set_Subscribe = (subscribe:string)=>{
        this.Subscribe=subscribe;
    }
     public get_Privacy_Policy_check  =  ()=>{
        return this.PrivacyPolicy;
    }
    public set_Privacy_policy_check = (privacyPolicy:string)=>{
        this.PrivacyPolicy=privacyPolicy;
    }

}
export default User;