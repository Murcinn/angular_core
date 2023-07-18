using EnsureThat;
using Insig.Common.Exceptions;
using Insig.Domain.Common;
using System.Data;

namespace Insig.Domain.Restaurants;

public class Restaurant : AuditableEntity
{
    public Restaurant(string name,string location, int stars, double averagePrice, string cuisineType, bool delivery)
    {
        EnsureThatNameIsCorrect(name);
        
        Name = name;
        Location = location;
        Stars = stars;  
        AveragePrice = averagePrice;
        CuisineType = cuisineType;
        Delivery = delivery;

        Deleted = false;
    }

    public int Id { get; }

    public string Name { get; private set; }
    public string Location { get; private set; }
    public int Stars { get; private set; }
    public double AveragePrice{ get; private set; }
    public string CuisineType { get; private set; }
    public bool Delivery { get; private set; }

    public bool Deleted { get;  set; }


    private void EnsureThatNameIsCorrect(string name)
    {
        EnsureArg.IsNotNullOrWhiteSpace(name, nameof(name));

        if (name.ToLower().Contains("test"))
        {
            throw new DomainException($"Restaurant value with name: {name} is not allowed.");
        }
    }
    public void UpdateData(Restaurant restaurant)
    {
        EnsureThatNameIsCorrect(restaurant.Name);
        
        Location=restaurant.Location;
        Stars=restaurant.Stars;
        AveragePrice = restaurant.AveragePrice;
        CuisineType=restaurant.CuisineType;
        Delivery=restaurant.Delivery;
    }
}