using System.Collections.Generic;
using System.Threading.Tasks;
using EnsureThat;
using Insig.ApplicationServices.Boundaries;
using Insig.Common.CQRS;
using Insig.PublishedLanguage.Dtos;
using Insig.PublishedLanguage.Queries;


namespace Insig.ApplicationServices.UseCases
{
    public class GetRestaurantUseCase : IQueryHandler<RestaurantParameter, List<RestaurantDTO>>
    {
        private readonly IRestaurantQuery _restaurantQuery;

        public GetRestaurantUseCase(IRestaurantQuery restaurantQuery)
        {
            EnsureArg.IsNotNull(restaurantQuery, nameof(restaurantQuery));

            _restaurantQuery = restaurantQuery;
        }

        public async Task<List<RestaurantDTO>> Handle(RestaurantParameter query)
        {

            
            return await _restaurantQuery.GetRestaurantData(query);
        }
    }

}