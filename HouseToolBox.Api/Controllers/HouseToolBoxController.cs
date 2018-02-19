using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HouseToolBox.Api.Controllers
{
    [Authorize]
    public abstract class HouseToolBoxController : Controller
    {

    }
}
