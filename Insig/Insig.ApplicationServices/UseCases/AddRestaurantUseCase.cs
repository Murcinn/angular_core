using Insig.ApplicationServices.Boundaries;
using Insig.Domain.Restaurants;
using Insig.Domain;
using System.Threading.Tasks;
using Insig.PublishedLanguage.Commands;
using Insig.Common.CQRS;
namespace Insig.ApplicationServices.UseCases
{
    internal class AddRestaurantUseCase : ICommandHandler<AddRestaurantCommand>
    {
        private readonly IRestaurantRepository _restaurantRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AddRestaurantUseCase(IRestaurantRepository restaurantRepository, IUnitOfWork unitOfWork)
        {
            _restaurantRepository = restaurantRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task Handle(AddRestaurantCommand command)
        {
            _restaurantRepository.EnsureThatRestaurantDoesNotExist(command.Name);

            _restaurantRepository.Store(new Restaurant(command.Name, command.Location, command.Star, command.AveragePrice, command.CouniseType, command.Delivery));
            await _unitOfWork.Save();
        }
    }
}