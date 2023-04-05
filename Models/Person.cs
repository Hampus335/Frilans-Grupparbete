namespace Frilansare.Models
{
    public class Person
    {
        public string? FirstName { get; set; }
        public string? SurName { get; set; }
        public int Age { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Country { get; set; }
        public string? Language { get; set; }
        public string? Nationality { get; set; }
        public string? DriversLicense { get; set; }
        public string? SelfDescription { get; set; }
        public List<string>? Abilities { get; set; }
        public string? Education { get; set; }
    }
}