using FreelancerProject;
using Frilansare.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver.Core.Configuration;
using MongoDB.Driver;
using System.Diagnostics;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;

namespace Frilansare.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Freelancer()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Customer()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
     [HttpPost("/AddPerson")]
     public async Task<IActionResult> AddPersonAsync(string firstName, string surName,
     int age, string email, string phoneNumber,
     string education, string nationality,
     string country, string driversLicense,
     string[] competences, string language,
     string selfDescription, string address)
        {

            Console.WriteLine("Hello, works");
            
            Backend backend = new Backend();
            Person person = new Person();
            person.Id = new ObjectId();
            person.FirstName = firstName;
            person.SurName = surName;
            person.Age = age;
            person.Email = email;
            person.PhoneNumber = phoneNumber;
            person.Education = education;
            person.Nationality = nationality;
            person.Country = country;
            person.DriversLicense = driversLicense;
            person.Competences = competences;
            person.Language = language;
            person.SelfDescription = selfDescription;
            person.Adress = address;

            await backend.CreateDatabaseAndSavePersonAsync(person);
            return Redirect("/");
        }

        [HttpGet("/SearchCV")]
        public IActionResult SearchCV(string firstName, string surName, string education, string selfDescription)
        {
            string connectionString = "mongodb://127.0.0.1:27017";
            string databaseName = "CVs";
            string collectionName = "people";

            var client = new MongoClient(connectionString);
            var database = client.GetDatabase(databaseName);
            var collection = database.GetCollection<Person>(collectionName);

            var filterBuilder = Builders<Person>.Filter;
            var filters = new List<FilterDefinition<Person>>(); 

            if (!string.IsNullOrWhiteSpace(firstName))
            {
                filters.Add(filterBuilder.Regex("FirstName", new BsonRegularExpression(firstName, "i")));
            }

            if (!string.IsNullOrWhiteSpace(surName))
            {
                filters.Add(filterBuilder.Regex("SurName", new BsonRegularExpression(surName, "i")));
            }
             
            if (!string.IsNullOrWhiteSpace(education))
            {
                filters.Add(filterBuilder.Regex("Education", new BsonRegularExpression(education, "i")));
            }

            if (!string.IsNullOrWhiteSpace(selfDescription))
            {
                filters.Add(filterBuilder.Regex("SelfDescription", new BsonRegularExpression(selfDescription, "i")));
            }
            var filter = filters.Count > 0 ? filterBuilder.And(filters) : null;
            var results = filter != null ? collection.Find(filter).ToList() : collection.Find(_ => true).ToList();
       
            return Ok(results);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}   