using System;
using MongoDB.Driver;


namespace FreelancerProject
{
    public class CV
    {
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
    }

    private static class Program
    {   
        private static void Main()
        {

        }

        private static void sendData()
        {
            var client = new MongoClient("mongodb://localhost:27017");
            var database = client.GetDatabase("mydatabase");

            var collection = database.GetCollection<Frilansare>("CVn");
            var CV = new person { person.firstName, person.surName, person.age, person.email, person.phoneNumber, person.country, person.language, person.nationality, person.driversLicense, person.selfDescription, person.abilities, person.education };
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