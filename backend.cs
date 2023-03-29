using System;

mongodb+srv://Hampus:Luftballong22@cluster0.pzxpnw3.mongodb.net/test
namespace FreelancerProject
{
    public static class UserData
    {   
        public static void Main()
        {
            SaveCV();
        }

        private static SaveCV()
        {
        const string firstName = Request.Form["firstName"];
        const string surName = Request.Form["surName"];
        const int age = int.Parse(Request.Form["age"]);
        const string email = Request.Form["email"];
        const string address = Request.Form["address"];
        const string phoneNumber = Request.Form["phoneNumber"];
        const string country = Request.Form["country"];
        const string language = Request.Form["language"];
        const string nationality = Request.Form["nationality"];
        const string driversLicense = Request.Form["driversLicense"];
        const string selfDescription = Request.Form["selfDescription"];
        const string abilities = Request.Form["abilities"];
        const string education = Request.Form["education"];
        }
    }
}