using Insig.Domain.Restaurants;
namespace Insig.ApplicationServices.Boundaries;

public interface IRestaurantRepository
{
    void EnsureThatRestaurantDoesNotExist(string name);
    void Store(Restaurant restaurant);

    public void EnsureThatRestaurantExist(string name);

    public void Delete(string name);


}
