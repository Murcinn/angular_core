using EnsureThat;
using Insig.ApplicationServices.Boundaries;
using Insig.Infrastructure.QueryBuilder;
using Insig.PublishedLanguage.Dtos;
using Insig.PublishedLanguage.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Insig.Infrastructure.Queries
{
    public class RestaurantQuery : IRestaurantQuery
    {
        private readonly SqlQueryBuilder _sqlQueryBuilder;

        public RestaurantQuery(SqlQueryBuilder sqlQueryBuilder)
        {
            EnsureArg.IsNotNull(sqlQueryBuilder, nameof(sqlQueryBuilder));

            _sqlQueryBuilder = sqlQueryBuilder;
        }

        public async Task<List<RestaurantDTO>> GetRestaurantData(RestaurantParameter query)
        {
            return await _sqlQueryBuilder
                .Select("*")
                .From("Restaurant")
                .Where("Deleted","0")
                .BuildQuery<RestaurantDTO>()
                .ExecuteToList();
        }
    }
}