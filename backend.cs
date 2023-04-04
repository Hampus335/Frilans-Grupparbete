    using System;
using MongoDB.Driver;


namespace FreelancerProject
{

    // hindrar syntax error
    public static class Request
    {
        public static Dictionary<string, string> Form = new Dictionary<string, string> {
        };
    }

    public class Frilansare
    {

    }

    public class person 
    {
        public string? firstName { get; set; }
        public string? surName { get; set; }
        public int age { get; set; }
        public string? email { get; set; }
        public string? phoneNumber { get; set; }
        public string? country { get; set; }
        public string? language { get; set; }
        public string? nationality { get; set; }
        public string? driversLicense { get; set; }
        public string? selfDescription{ get; set; }
        public List<string>? abilities { get; set; }
        public string? education { get; set; }
    }

    public class CV
    {
        /*
        public string firstName = Request.Form["firstName"];
        public string surName = Request.Form["surName"];
        public int age = int.Parse(Request.Form["age"]);
        public string email = Request.Form["email"];
        public string phoneNumber = Request.Form["phoneNumber"];
        public string country = Request.Form["country"];
        public string language = Request.Form["language"];
        public string nationality = Request.Form["nationality"];
        public string driversLicense = Request.Form["driversLicense"];
        public string selfDescription = Request.Form["selfDescription"];
        public string abilities = Request.Form["abilities"];
        public string education = Request.Form["education"];
        */
        public string firstName = "Hampus";
        public string surName = "Grunewald";
        public int age = 18;
        public string email = "hampus.grunewald05@gmail.com";
        public string phoneNumber = "070 745 41 57";
        public string country = "Sweden";
        public string language = "Swedish";
        public string nationality = "Sweden";
        public string driversLicense = "yes";
        public string selfDescription = "";
        public string abilities = "i can write code";
        public string education = "i dont have any education";
    }

    static class Program
    {   
        public static void Main(string[] args)
        {   
            
        }
        

        private static async void sendData()
        {
            var client = new MongoClient("mongodb://localhost:27017");
            var database = client.GetDatabase("mydatabase");

            var collection = database.GetCollection<CV>("CVn");
            //var CV = new person { person.firstName, person.surName, person.age, person.email, person.phoneNumber, person.country, person.language, person.nationality, person.driversLicense, person.selfDescription, person.abilities, person.education };
            var CV = new CV { };
            await collection.InsertOneAsync(CV);
        }

        private static async void RetrieveData()
        {
            var client = new MongoClient("mongodb://localhost:27017");
            var database = client.GetDatabase("mydatabase");

            var collection = database.GetCollection<Frilansare>("CVn");
            var CVn = await collection.Find(x => true).ToListAsync();
        }
    }   
}