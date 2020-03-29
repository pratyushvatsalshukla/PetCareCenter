function FormValidation()
{
    let UserName = document.SignInHere.UserName.value ;
    let UserPassword = document.SignInHere.UserPassword.value ;
    if(UserName == "")
    {
        alert("Please Enter UserName Before Proceeding Further") ;
        return false ;
    }
    if(UserPassword == "" || (UserPassword.length < 8) || (!UserPassword.contains("#")))
    {
        alert("Please Enter A Valid Password !! Password Length Must be More Than 8 Or It Must Contain Special Symbols") ;
        return false ;
    }
}