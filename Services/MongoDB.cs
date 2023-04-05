using MongoDB.Driver;

namespace Frilansare.Services
{
    public class MongoDB
    {
        /*private static async void sendData()
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
        }   */
    }
}
