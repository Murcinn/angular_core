using Insig.Common.CQRS;
using Insig.PublishedLanguage.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Insig.PublishedLanguage.Queries
{

    public class RestaurantParameter : IQuery<List<RestaurantDTO>>
    {
    }
}
