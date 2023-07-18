using Insig.ApplicationServices.Boundaries;
using Insig.Common.CQRS;
using Insig.Domain;
using Insig.PublishedLanguage.Commands;
using System.Threading.Tasks;


namespace Insig.ApplicationServices.UseCases
{
    public class DeleteRestaurantUseCase : ICommandHandler<DeleteRestaurantCommand>
    {
        private readonly IRestaurantRepository _restaurantRepository;
        private readonly IUnitOfWork _unitOfWork;

        public DeleteRestaurantUseCase(IRestaurantRepository restaurantRepository, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _restaurantRepository = restaurantRepository;
        }
        public async Task Handle(DeleteRestaurantCommand command)
        {
            _restaurantRepository.EnsureThatRestaurantExist(command.Name);
            _restaurantRepository.Delete(command.Name);
            await _unitOfWork.Save();
        }


    }


}

