using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WaterProject.API.Data;

namespace WaterProject.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class WaterController : ControllerBase
    {
        private WaterDbContext _waterContext;
        public WaterController(WaterDbContext temp) => _waterContext = temp;

        [HttpGet("AllProjects")]
        public IActionResult GetProjects(int pageSize = 5, int pageNum = 1)
        {
            string favoriteProjectType = Request.Cookies["favoriteProjectType"];
            Console.WriteLine(favoriteProjectType);

            HttpContext.Response.Cookies.Append("favoriteProjectType", "Borehole Well and Hand Pump", new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None,
                Expires = DateTime.Now.AddMinutes(5)
            });

            var projectList = _waterContext.Projects
            .Skip((pageNum-1) * pageSize)
            .Take(pageSize)
            .ToList();

            var totalNumProjects = _waterContext.Projects.Count();

            var listAll = new
            {
                Projects = projectList,
                TotalNumProjects = totalNumProjects
            };

            return Ok(listAll);
        }
        [HttpGet("FunctionalProjects")]
        public IEnumerable<Project> GetFunctionalProjects()
        {
            var functionalList = _waterContext.Projects.Where(p => p.ProjectFunctionalityStatus == "Functional").ToList();
            return functionalList;
        }
    }
}
