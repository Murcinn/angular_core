using System.Collections.Generic;
using System.Threading.Tasks;
using EnsureThat;
using Insig.Common.Auth;
using Insig.Common.CQRS;
using Insig.PublishedLanguage.Commands;
using Insig.PublishedLanguage.Dtos;
using Insig.PublishedLanguage.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Insig.Api.Controllers;

[Route("Restaurant")]
[ApiController]
public class RestaurantsController : ControllerBase
{
    private readonly IQueryDispatcher _queryDispatcher;
    private readonly ICommandDispatcher _commandDispatcher;

    public RestaurantsController(IQueryDispatcher queryDispatcher, ICommandDispatcher commandDispatcher)
    {
        EnsureArg.IsNotNull(queryDispatcher, nameof(queryDispatcher));
        EnsureArg.IsNotNull(commandDispatcher, nameof(commandDispatcher));

        _queryDispatcher = queryDispatcher;
        _commandDispatcher = commandDispatcher;
    }


    [AllowAnonymous]
    [HttpGet("restaurants")]
    public async Task<IActionResult> GetRestaurants([FromQuery] RestaurantParameter parameter)
    {
        List<RestaurantDTO> result = await _queryDispatcher.Dispatch(parameter);
        return Ok(result);
    }

    //[Authorize(Policies.Consumer)]
    [AllowAnonymous]
    [HttpPost("restaurants")]
    public async Task<IActionResult> AddRestaurants([FromBody] AddRestaurantCommand command)
    {
        await _commandDispatcher.Dispatch(command);
        return Ok();
    }

    [AllowAnonymous]
    [HttpPatch("restaurants")]
    public async Task<IActionResult> DeleteRestaurant([FromBody] DeleteRestaurantCommand command)
    {
        await _commandDispatcher.Dispatch(command);
        return Ok();
    }

}