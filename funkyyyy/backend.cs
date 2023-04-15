using System;
using MongoDB.Driver;
using Frilansare.Models;

namespace FreelancerProject
{
    public static class Request
    {
        public static Dictionary<string, string> Form = new Dictionary<string, string>
        {
        };
    }
    public class Backend
    {
        public async Task CreateDatabaseAndSavePersonAsync(Person person)
        {
            string connectionString = "mongodb://127.0.0.1:27017";
            string databaseName = "CVs";
            string collectionName = "people";

            var client = new MongoClient(connectionString);
            var db = client.GetDatabase(databaseName);
            var collection = db.GetCollection<Person>(collectionName);
                
            await collection.InsertOneAsync(person);


            //reads from the db
            var results = await collection.FindAsync(_ => true);
        }
    } 
}