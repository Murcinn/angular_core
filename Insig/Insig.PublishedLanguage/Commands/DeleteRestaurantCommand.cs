using Insig.Common.CQRS;

namespace Insig.PublishedLanguage.Commands


{
    public class DeleteRestaurantCommand : ICommand
    {

        public string Name { get; set; }
    }
}
