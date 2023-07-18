
using Insig.Common.CQRS;

namespace Insig.PublishedLanguage.Commands
{
    public class UpdateRestaurantCommand : ICommand
    {
        public string Name { get; set; }
        public string Location { get; set; }
        public int Stars { get; set; }
        public double AveragePrice { get; set; }
        public string CuisineType { get; set; }
        public bool Delivery { get; set; }

    }
}
