using Insig.Common.CQRS;
using System.Threading.Tasks;
using Insig.ApplicationServices.Boundaries;
using Insig.Domain;
using Insig.PublishedLanguage.Commands;
using Insig.Domain.Restaurants;

namespace Insig.ApplicationServices.UseCases
{
    public class UpdateRestaurantUseCase : ICommandHandler<UpdateRestaurantCommand>
    {
        
        
            private readonly IRestaurantRepository _restaurantRepository;
            private readonly IUnitOfWork _unitOfWork;

            public UpdateRestaurantUseCase(IRestaurantRepository restaurantRepository, IUnitOfWork unitOfWork)
            {
                _unitOfWork = unitOfWork;
                _restaurantRepository = restaurantRepository;
            }
            public async Task Handle(UpdateRestaurantCommand command)
            {
                _restaurantRepository.Update(new Restaurant(command.Name,command.Location,command.Stars,command.AveragePrice,command.CuisineType,command.Delivery),command.Name);
                await _unitOfWork.Save();
            }
        



    }
}
