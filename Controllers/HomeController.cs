﻿using FreelancerProject;
using Frilansare.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

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
     public async Task<IActionResult> AddPersonAsync(
     Person person)
        {

            Console.WriteLine("Hello, works");
            
            Backend backend = new Backend();

            await backend.CreateDatabaseAndSavePersonAsync(person);
            return Redirect("/");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}