using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
using FreelancerProject;
using Frilansare.Controllers;

namespace Frilansare.Models
{
    public class Person
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Education { get; set; }
        public string Country { get; set; }
        public string Language { get; set; }
        public string Nationality { get; set; }
        public string DriversLicense { get; set; }
        public string[] Competences { get; set; }
        public string SelfDescription { get; set; }
        public string Adress { get; set; }

        public void PersonToDatabase(string firstName, string surName,
     int age, string email, string phoneNumber,
     string education, string nationality,
     string country, string driversLicense,
     string[] competences, string language,
     string selfDescription, string address)
        {
            Person person = new Person();
            //HomeController hc = new HomeController();
            //hc.AddPersonAsync(person);
        }
    }
}