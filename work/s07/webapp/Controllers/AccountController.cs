using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using webapp.Models;
using webapp.Services;

namespace webapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        public AccountController(JsonFileAccountService accountService)
        {
            AccountService = accountService;
        }

        public JsonFileAccountService AccountService { get; }

        [HttpGet("{id}")]
        public IEnumerable <Account> Get(int id)
        {
            Account account = AccountService.GetAccount(id);
            IEnumerable<Account> accounts = new[] { account};
            return accounts ;
        }
    }
}
